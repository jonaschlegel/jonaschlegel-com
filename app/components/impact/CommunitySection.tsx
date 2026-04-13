import type { FC } from 'react';

interface CommunitySectionProps {
  community: CommunityMetricsSnapshot;
  platforms: SocialPlatformData[];
}

/** Community building metrics — only renders if there's meaningful data. */
const CommunitySection: FC<CommunitySectionProps> = ({
  community,
  platforms,
}) => {
  const communityPlatforms = platforms.filter(
    (p) => p.category === 'community',
  );

  const stats = [
    community.eventsOrganized > 0 && {
      label: 'Events Organised',
      value: community.eventsOrganized,
    },
    community.communityMembers > 0 && {
      label: 'Community Members',
      value: community.communityMembers,
    },
    (community.mapathonParticipants ?? 0) > 0 && {
      label: 'Mapathon Participants',
      value: community.mapathonParticipants,
    },
    (community.kickstarterBackers ?? 0) > 0 && {
      label: 'Kickstarter Backers',
      value: community.kickstarterBackers,
    },
  ].filter(Boolean) as { label: string; value: number }[];

  // Don't render the section at all if no stats and no platforms
  if (stats.length === 0 && communityPlatforms.length === 0) return null;

  return (
    <section className="mb-16">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-green">
        Community Building
      </p>
      <h2 className="mb-3 font-merriweather text-2xl font-semibold md:text-3xl">
        Events & Community
      </h2>
      <p className="mb-8 max-w-2xl text-gray-600">
        Building communities around archaeology through platforms, events, and
        collaborative projects.
      </p>

      {stats.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2"
            >
              <span className="text-xs text-gray-600">{s.label}</span>
              <span className="font-merriweather text-sm font-bold text-primary-green">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {communityPlatforms.length > 0 && (
        <div className="space-y-2">
          {communityPlatforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:border-primary-green"
            >
              <div>
                <span className="text-sm font-medium text-primary-green">
                  {platform.name}
                </span>
                <p className="text-xs text-gray-500">{platform.purpose}</p>
              </div>
              <span className="text-xs text-gray-400">→</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default CommunitySection;
