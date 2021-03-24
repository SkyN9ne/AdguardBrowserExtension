export const adgSettings = JSON.stringify({
    'protocol-version': '1.0',
    'general-settings': {
        'app-language': 'en-GB',
        'allow-acceptable-ads': true,
        'show-blocked-ads-count': true,
        'autodetect-filters': true,
        'safebrowsing-enabled': true,
        'filters-update-period': -1,
        'appearance-theme': 'system',
    },
    'extension-specific-settings': {
        'use-optimized-filters': false,
        'collect-hits-count': false,
        'show-context-menu': true,
        'show-info-about-adguard': true,
        'show-app-updated-info': true,
    },
    'filters': {
        'enabled-groups': [1, 2, 3, 4, 5, 6, 7],
        'enabled-filters': [208, 10, 14, 1, 2, 3, 4, 210, 242],
        'custom-filters': [],
        'user-filter': {
            'rules': '',
            'disabled-rules': '',
        },
        'whitelist': {
            'inverted': false,
            'domains': [],
            'inverted-domains': [],
        },
    },
    'stealth': {
        'stealth_disable_stealth_mode': true,
        'stealth-hide-referrer': true,
        'stealth-hide-search-queries': true,
        'stealth-send-do-not-track': true,
        'stealth-remove-x-client': true,
        'stealth-block-webrtc': false,
        'stealth-block-third-party-cookies': true,
        'stealth-block-third-party-cookies-time': 2880,
        'stealth-block-first-party-cookies': false,
        'stealth-block-first-party-cookies-time': 4320,
        'strip-tracking-parameters': true,
        // eslint-disable-next-line max-len
        'tracking-parameters': 'utm_source,utm_medium,utm_term,utm_campaign,utm_content,utm_name,utm_cid,utm_reader,utm_viz_id,utm_pubreferrer,utm_swu,utm_referrer,utm_social,utm_social-type,utm_place,utm_userid,utm_channel,fb_action_ids,fb_action_types,fb_ref,fb_source',
    },
});
