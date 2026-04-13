# Impact Data Update Guide

Quarterly checklist for updating `app/data/impact.json`. Recommended schedule: **January 1, April 1, July 1, October 1** (or whenever you have time).

## Before You Start

1. Copy the `current` snapshot into the `history` array (this preserves the previous quarter)
2. Update `lastUpdated` to today's date
3. Update the `date` field in `current` to today's date

## Social Media Platforms

### Instagram (@archaeoink)

- **Where**: [instagram.com/archaeoink](https://www.instagram.com/archaeoink/) → Profile page
- **Collect**: followers, posts count
- **Update**: `current.digitalPresence.platformMetrics` → `instagram-archaeoink`

### Bluesky (@jonaschlegel.com)

- **Where**: [bsky.app/profile/jonaschlegel.com](https://bsky.app/profile/jonaschlegel.com)
- **Collect**: followers, posts count
- **Update**: `current.digitalPresence.platformMetrics` → `bluesky`

### LinkedIn (jona-schlegel)

- **Where**: [linkedin.com/in/jona-schlegel-942879153](https://www.linkedin.com/in/jona-schlegel-942879153/) → Profile analytics
- **Collect**: followers (connections + followers), posts count
- **Update**: `current.digitalPresence.platformMetrics` → `linkedin`

### Mastodon (@archaeoINK@mastodon.social)

- **Where**: [mastodon.social/@archaeoINK](https://mastodon.social/@archaeoINK)
- **Collect**: followers, posts (toots) count
- **Update**: `current.digitalPresence.platformMetrics` → `mastodon`

### Twitter/X (@JonaSchlegel)

- **Where**: [twitter.com/JonaSchlegel](https://twitter.com/JonaSchlegel)
- **Collect**: followers, posts count
- **Update**: `current.digitalPresence.platformMetrics` → `twitter`
- **Note**: Mark as less active if you've migrated to Bluesky

### Behance (jonaschlegel1)

- **Where**: [behance.net/jonaschlegel1](https://www.behance.net/jonaschlegel1) → Stats
- **Collect**: followers, project views
- **Update**: `current.digitalPresence.platformMetrics` → `behance`

### After collecting all social stats

- **Sum all followers** and update `current.digitalPresence.totalFollowers`

---

## Academic Research

### Google Scholar

- **Where**: Your Google Scholar profile → click your name
- **Collect**: h-index, i10-index, total citations, number of publications listed
- **Update**: `current.academic.hIndex`, `current.academic.i10Index`, `current.academic.totalCitations`
- **Note**: Google Scholar typically has the broadest coverage — use this as your primary h-index source

### ResearchGate

- **Where**: Your ResearchGate profile page
- **Collect**: Publications count, reads, citations (may differ from Google Scholar)
- **Note**: Cross-reference but use Google Scholar as primary source for h-index

### ORCID

- **Where**: [orcid.org/0000-0002-4190-9566](https://orcid.org/0000-0002-4190-9566)
- **Collect**: Total works listed
- **Note**: Keep this updated — it's increasingly required by publishers and funders

### Scopus

- **Where**: Your Scopus author profile (search by name or ORCID)
- **Collect**: Documents, citations, h-index (Scopus-specific)
- **Note**: Scopus has narrower coverage than Google Scholar but is more authoritative for peer-reviewed journals

### Other Academic Platforms

- **Web of Science, Academia.edu, Semantic Scholar, SciProfiles, ResearcherID, ImpactStory, scite, Loop**
- Most of these auto-update when you add publications elsewhere
- Check annually that profiles are claimed and linked to your ORCID
- Update URLs in `platforms` array if needed

### Conference Presentations

- **Count manually**: talks, posters, panels you've given at academic conferences this quarter
- **Update**: `current.academic.conferencesPresentations` (cumulative total)
- **Update**: `current.academic.totalPublications` (cumulative total of all formal publications)

---

## Science Communication

### Podcast (Things We Threw Away)

- **Where**: Your podcast host (e.g., Substack dashboard, Spotify for Podcasters)
- **Collect**: total episodes published, total downloads (if available), subscriber count
- **Update**: `current.sciComm.podcastEpisodes`, `current.sciComm.podcastDownloads`, `current.sciComm.podcastSubscribers`

### Blog (archaeoINK)

- **Where**: [archaeoink.com](https://www.archaeoink.com/) dashboard / analytics
- **Collect**: total blog posts published, total page views (if tracked)
- **Update**: `current.sciComm.blogPosts`, `current.sciComm.blogViews`

### Newsletter (Kit/ConvertKit)

- **Where**: [app.kit.com](https://app.kit.com) → Subscribers tab
- **Collect**: total subscribers, average open rate
- **Update**: `current.sciComm.newsletterSubscribers`, `current.sciComm.newsletterOpenRate`

### Guest Appearances

- **When**: Whenever you appear on someone else's podcast, panel, webinar, etc.
- **Add to**: `guestAppearances` array with id, title, show, date, url, type
- **Update**: `current.sciComm.guestAppearances` (total count)

---

## Community Building

### PastForwardHub

- **Where**: [pastforwardhub.com](https://pastforwardhub.com) analytics
- **Collect**: registered members, active users
- **Update**: `current.community.communityMembers`

### Events

- **Count manually**: Mapathons, workshops, meetups you've organised
- **Update**: `current.community.eventsOrganized`, `current.community.mapathonParticipants`

### Collaborators

- **Count manually**: People you actively collaborate with on projects
- **Update**: `current.community.collaborators`

### Kickstarter

- **Where**: Your Kickstarter campaign pages
- **Collect**: total backers, amount funded
- **Update**: `current.community.kickstarterBackers`, `current.community.kickstarterFunded`

---

## Creative & Commercial

### Ko-fi (archaeoink)

- **Where**: Your Ko-fi dashboard
- **Collect**: supporters count, active listings
- **Update**: `current.creative.supporters`, `current.creative.productsListed`

### Redbubble (archaeoink)

- **Where**: Your Redbubble shop dashboard
- **Collect**: products listed

### Etsy (archaeoink)

- **Where**: Your Etsy shop dashboard
- **Collect**: active listings

### Behance

- **Collect**: number of projects published
- **Update**: `current.creative.projects`

---

## Open Source & GitHub

### GitHub (jonaschlegel)

- **Where**: [github.com/jonaschlegel](https://github.com/jonaschlegel) → Overview tab
- **Collect**:
  - Public repositories count (top of profile)
  - Total stars across repos (check each repo or use [github-readme-stats](https://github.com/anuraghazra/github-readme-stats))
  - Contribution count (from the green squares graph — "X contributions in the last year")
  - Total forks across repos
- **Update**: `current.openSource.publicRepos`, `current.openSource.stars`, `current.openSource.contributions`, `current.openSource.forks`

---

## Scoring Thresholds

The scoring thresholds in `scoringThresholds` control how raw metrics are normalized to 0–10 scores on the radar chart. You can adjust these as your career progresses:

| What to adjust         | When                                 | Effect                             |
| ---------------------- | ------------------------------------ | ---------------------------------- |
| Increase `max` values  | When a metric consistently scores 10 | Makes the target more aspirational |
| Decrease `max` values  | When you're just starting in an area | Makes early progress more visible  |
| Adjust `weight` values | When one metric matters more to you  | Shifts emphasis within a dimension |

**Important**: Weights within each dimension must sum to 1.0.

### Current Thresholds (archaeology/digital humanities, early-career)

See the detailed explanation in `app/data/impact-utils.ts` for rationale behind each default.

---

## After Updating

1. Run `pnpm build` to verify the page renders correctly
2. Check `localhost:3000/impact` in the browser
3. Verify the radar chart shape makes sense
4. Commit with message like: `chore: update impact data Q2 2026`
