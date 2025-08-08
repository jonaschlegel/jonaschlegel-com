# Tracking Implementation

This implementation provides robust tracking that works even when ad blockers are present.

## Features

1. **Graceful Degradation**: Falls back to server-side tracking when client-side scripts are blocked
2. **Error Handling**: Comprehensive error handling for blocked scripts
3. **Development Debug**: Visual debug panel in development mode
4. **Fallback Cookie Banner**: Simple cookie consent when CookieYes is blocked
5. **Multiple Tracking Options**: Google Analytics, Facebook Pixel, and custom analytics

## Components

### `app/Tracking.tsx`

Main tracking component with error handling and fallbacks.

### `app/lib/tracking.ts`

Utility functions for safe tracking:

- `trackEvent(name, parameters)` - Track custom events
- `trackPageView(url)` - Track page views
- `isTrackingBlocked()` - Check if tracking is blocked

### `app/api/analytics/route.ts`

Server-side analytics endpoint for fallback tracking.

## Setup

1. Copy `.env.example` to `.env.local`
2. Fill in your tracking IDs and API secrets
3. For Google Analytics server-side tracking, get a Measurement Protocol API secret from GA4

## Usage

```tsx
import { trackEvent, trackPageView } from './lib/tracking';

// Track page views
trackPageView();

// Track custom events
trackEvent('button_click', { button_name: 'cta' });
```

## Error Handling

The implementation handles these common issues:

- **Ad Blockers**: Scripts blocked by uBlock Origin, Ghostery, etc.
- **Privacy Tools**: Scripts blocked by browser privacy features
- **Network Issues**: CDN or script loading failures
- **403 Errors**: CookieYes or other service restrictions

## Development

In development mode, you'll see a debug panel showing which tracking scripts loaded successfully.

## Privacy Compliance

- Default consent settings deny all non-essential cookies
- Fallback cookie banner when CookieYes is blocked
- Server-side tracking respects privacy settings
- No personal data stored without consent
