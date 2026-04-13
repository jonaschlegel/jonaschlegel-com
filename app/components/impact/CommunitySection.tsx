import type { FC } from 'react';

interface CommunitySectionProps {
  community: CommunityMetricsSnapshot;
  platforms: SocialPlatformData[];
}

/** Community building metrics — PastForwardHub, events, collaborators. */
const CommunitySection: FC<CommunitySectionProps> = ({
  community,
  platforms,
}) => {
  const communityPlatforms = platforms.filter(
    (p) => p.category === 'community',
  );

  const stats = [
    {
      label: 'Events Organised',
      value: community.eventsOrganized,
      description: 'Mapathons, workshops, and community events.',
    },
    {
      label: 'Community Members',
      value: community.communityMembers,
      description: 'Total members across community platforms.',
    },
    {
      label: 'Collaborators',
      value: community.collaborators,
      description: 'Active project collaborators and partners.',
    },
    ...(community.mapathonParticipants
      ? [
          {
            label: 'Mapathon Participants',
            value: community.mapathonParticipants,
            description: 'People who joined Mapathon events.',
          },
        ]
      : []),
    ...(community.kickstarterBackers
      ? [
          {
            label: 'Kickstarter Backers',
            value: community.kickstarterBackers,
            description: 'Backers who supported crowdfunding campaigns.',
          },
        ]
      : []),
  ];

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
        collaborative projects that connect professionals across sectors.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-gray-200 p-5">
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-sm text-gray-700">{s.label}</span>
              <span className="font-merriweather text-2xl font-bold text-primary-green">
                {s.value}
              </span>
            </div>
            <p className="text-xs text-gray-500">{s.description}</p>
          </div>
        ))}
      </div>

      {communityPlatforms.length > 0 && (
        <>
          <h3 className="mb-4 text-lg font-semibold">Community Platforms</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {communityPlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-green"
              >
                <h4 className="font-semibold group-hover:text-primary-green">
                  {platform.name}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {platform.purpose}
                </p>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default CommunitySection;
