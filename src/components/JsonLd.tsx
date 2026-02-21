export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ديار جدة العالمية',
        image: [
            'https://deyarsu.com/logo.svg',
            'https://deyarsu.com/icon.png'
        ],
        '@id': 'https://deyarsu.com',
        url: 'https://deyarsu.com',
        telephone: '+966553719009',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'طريق الحرمين',
            addressLocality: 'Jeddah',
            postalCode: '21442',
            addressRegion: 'Makkah Region',
            addressCountry: 'SA'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 21.543333,
            longitude: 39.172778
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Saturday',
                'Sunday'
            ],
            opens: '08:00',
            closes: '23:00'
        },
        sameAs: [
            'https://instagram.com/diyarjeddah',
            'https://twitter.com/diyarjeddah'
        ],
        description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات ديار جدة',
            itemListElement: [
                {
                    '@type': 'Service',
                    name: 'مظلات',
                    url: 'https://deyarsu.com/services/car-shades',
                    description: 'تركيب مظلات سيارات ومظلات حدائق بأفضل الخامات.'
                },
                {
                    '@type': 'Service',
                    name: 'برجولات',
                    url: 'https://deyarsu.com/services/pergolas',
                    description: 'برجولات خشبية وحديد للحدائق والأسطح.'
                },
                {
                    '@type': 'Service',
                    name: 'بيوت شعر',
                    url: 'https://deyarsu.com/services/tents',
                    description: 'تفصيل وتركيب بيوت شعر ملكية وخيام.'
                },
                {
                    '@type': 'Service',
                    name: 'سواتر',
                    url: 'https://deyarsu.com/services/sawatr',
                    description: 'سواتر حديد وقماش لزيادة الخصوصية والأمان.'
                },
                {
                    '@type': 'Service',
                    name: 'هناجر',
                    url: 'https://deyarsu.com/services/panel',
                    description: 'إنشاء هناجر ومستودعات وساندوتش بانل.'
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
