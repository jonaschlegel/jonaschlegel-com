'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({
  items,
  className = '',
}: BreadcrumbsProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from pathname if items not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on homepage
  }

  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <ol
        className="flex items-center space-x-2 text-sm text-neutral-400"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => (
          <li
            key={`breadcrumb-${item.href || item.label.replace(/\s+/g, '-').toLowerCase()}`}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <FaChevronRight className="h-3 w-3 mx-2 text-neutral-600" />
            )}

            {item.href ? (
              <Link
                href={item.href as any}
                className="hover:text-white transition-colors flex items-center"
                itemProp="item"
              >
                {index === 0 && <FaHome className="h-4 w-4 mr-1" />}
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-white flex items-center" itemProp="name">
                {index === 0 && <FaHome className="h-4 w-4 mr-1" />}
                {item.label}
              </span>
            )}

            <meta itemProp="position" content={(index + 1).toString()} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';

  for (let i = 0; i < paths.length; i++) {
    currentPath += `/${paths[i]}`;
    const isLast = i === paths.length - 1;

    const pathSegment = paths[i];
    if (!pathSegment) continue;

    let label = pathSegment;

    // Customize labels for known routes
    const routeLabels: Record<string, string> = {
      cv: 'Curriculum Vitae',
      projects: 'Projects',
      about: 'About',
      imprint: 'Imprint',
      'privacy-policy': 'Privacy Policy',
      'terms-and-conditions': 'Terms & Conditions',
    };

    if (label in routeLabels) {
      label = routeLabels[label]!;
    } else {
      // Convert slug to title case
      label = label
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    breadcrumbs.push({
      label: label,
      href: isLast ? undefined : currentPath,
    });
  }

  return breadcrumbs;
}
