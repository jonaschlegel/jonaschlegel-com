import { BsArrowRight } from 'react-icons/bs';

interface ActivityItem {
  date: string;
  title: string;
  type: 'fieldwork' | 'publication' | 'talk' | 'project';
  location?: string;
  url?: string;
}

const recentActivity: ActivityItem[] = [
  {
    date: 'Mar 2026',
    title: 'Mapathon: Maps as Sources for Surinamese History',
    type: 'project',
    location: 'Amsterdam, NL',
    url: 'https://www.huygens.knaw.nl/evenementen/mapathon-kaarten-als-bron-voor-surinaamse-geschiedenis/',
  },
  {
    date: 'Mar 2026',
    title: 'ECSA 2026: Citizen Science & Surinamese Heritage',
    type: 'talk',
    url: 'https://www.ecsa2026.ngo/programme/#17161.92948',
  },
  {
    date: 'Feb 2026',
    title: 'Necessary Reunions platform launched',
    type: 'publication',
    url: 'https://necessaryreunions.org',
  },
  {
    date: 'Jan 2026',
    title: 'Software published on Zenodo',
    type: 'publication',
    url: 'https://zenodo.org/records/14918468',
  },
];

const typeColors: Record<ActivityItem['type'], string> = {
  fieldwork: 'bg-amber-100 text-amber-800',
  publication: 'bg-emerald-100 text-emerald-800',
  talk: 'bg-purple-100 text-purple-800',
  project: 'bg-primary-teal/20 text-primary-dark',
};

/** Timeline of recent professional activities and milestones. */
const RecentActivity = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
          Recent Activity
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recentActivity.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="group rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-gray-400"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] uppercase font-medium px-2 py-0.5 rounded ${typeColors[item.type]}`}
                >
                  {item.type}
                </span>
                <span className="text-xs text-gray-700">{item.date}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-800 mb-1">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-green transition-colors inline-flex items-center gap-1"
                  >
                    {item.title}
                    <BsArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              {item.location && (
                <p className="text-xs text-gray-700">{item.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
