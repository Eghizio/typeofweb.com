import { memo } from 'react';

import ClickIcon from '../../images/social/click.svg';
import FacebookIcon from '../../images/social/facebook.svg';
import GithubIcon from '../../images/social/github.svg';
import InstagramIcon from '../../images/social/instagram.svg';
import JsonFeedIcon from '../../images/social/jsonfeed.svg';
import LinkedinIcon from '../../images/social/linkedin.svg';
import RssIcon from '../../images/social/rss.svg';
import TwitterIcon from '../../images/social/twitter.svg';
import YoutubeIcon from '../../images/social/youtube.svg';
import { Widget } from '../atoms/Widget';

export const social = [
  { icon: FacebookIcon, label: 'Facebook', slug: 'facebook' },
  { icon: YoutubeIcon, label: 'YouTube', slug: 'youtube' },
  { icon: GithubIcon, label: 'GitHub', slug: 'github' },
  { icon: InstagramIcon, label: 'Instagram', slug: 'instagram' },
  { icon: TwitterIcon, label: 'Twitter', slug: 'twitter' },
  { icon: LinkedinIcon, label: 'LinkedIn', slug: 'linkedin' },
] as const;

const myUrls = {
  twitter: 'https://twitter.com/typeofweb',
  facebook: 'https://facebook.com/typeofweb',
  github: 'https://github.com/typeofweb',
  youtube: 'https://www.youtube.com/c/typeofweb',
  instagram: 'https://instagram.com/michal_typeofweb',
  linkedin: 'https://linkedin.com/in/mmiszczyszyn',
};

export const SocialWidget = memo(() => {
  return (
    <Widget title="Śledź mnie na:">
      <ul className="flex flex-row flex-wrap gap-3 justify-between">
        {social.map(({ icon: Icon, label, slug }) => {
          return (
            <li key={label} className="text-gray-700 hover:text-green-700 transition-colors">
              <a href={myUrls[slug]} aria-label={label} title={label} className="block">
                <Icon className="w-8 fill-current" />
              </a>
            </li>
          );
        })}
        <li className="text-gray-700 hover:text-green-700 text-lg font-semibold transition-colors sm:mt-4">
          <a href="/feed.json" aria-label="JSON Feed" title="JSON Feed" className="block">
            <JsonFeedIcon className="inline-block mr-2 w-8 fill-current" />
            JSON Feed
          </a>
        </li>
        <li className="text-gray-700 hover:text-green-700 text-lg font-semibold transition-colors sm:mt-4">
          <a href="/feed.xml" aria-label="RSS" title="RSS" className="block">
            <RssIcon className="inline-block mr-2 w-8 fill-current" />
            RSS
          </a>
        </li>
        <li className="ml-0 pl-0 text-gray-700 hover:text-green-700 text-lg font-semibold transition-colors sm:mt-4">
          <a href="/wspolpraca">
            <ClickIcon className="inline-block mr-2 w-8 stroke-current" />O mnie i współpraca
          </a>
        </li>
      </ul>
    </Widget>
  );
});
SocialWidget.displayName = 'SocialWidget';
