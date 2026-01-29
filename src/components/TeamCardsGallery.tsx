import { getMdxFiles } from '@/utils/getMdxFiles';
import dynamic from 'next/dynamic';

interface TeamCardsGalleryProps {
  path?: string;
  title?: string;
  priorityCards?: string[]; // First entries you want to show
}

export default async function TeamCardsGallery({
  path: cardPath = 'project/team/cards',
  title = "Our Team",
  priorityCards = []
}: TeamCardsGalleryProps) {
  const cardNames = await getMdxFiles(`src/app/${cardPath}`);

  // Remove priority cards from the list to avoid duplicates
  const remainingCards = cardNames
    .filter((name) => !priorityCards.includes(name))
    .sort(); // Alphabetical order

  // Combine priority cards first, then the rest
  const sortedCards = [...priorityCards, ...remainingCards];

  return (
    <div className="container mx-auto max-w-screen-lg py-4">
      <h1 className="text-3xl font-bold text-center -mb-6">{title}</h1>
      <div className="team-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 justify-center">
        {sortedCards.map((name) => {
          const MDXComponent = dynamic(() => import(`../app/${cardPath}/${name}.mdx`));
          return (
            <div key={name} data-card-item className="w-full max-w-[300px] transform transition-all hover:scale-105 -mb-14">
              <MDXComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
}


interface FilterTeamCardsGalleryProps {
  cardFilteredNames?: string[] | Array<{name: string, path: string}>;
  cardPath?: string;
  title?: string;
}

export async function FilteredTeamCardsGallery({ 
  cardFilteredNames = [],
  cardPath = 'team/cards',
  title = "Our Team"
}: FilterTeamCardsGalleryProps) {
  if (cardFilteredNames.length === 0) {
    return <div className="text-center text-gray-500">No team cards available.</div>;
  }
  
  return (
    <div className="container mx-auto max-w-screen-lg py-4">
      <h1 className="text-3xl font-bold text-center -mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 justify-center">
        {cardFilteredNames.map((item) => {
          const name = typeof item === 'string' ? item : item.name;
          const path = typeof item === 'string' ? cardPath : item.path;
          const MDXComponent = dynamic(() => import(`../app/${path}/${name}.mdx`));
          return (
            <div key={name} className="w-full max-w-[300px] transform transition-all hover:scale-105 -mb-14">
              <MDXComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
}