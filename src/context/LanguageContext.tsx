'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
    language: Language;
    direction: Direction;
    toggleLanguage: () => void;
    t: (key: keyof typeof translations.ar) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    ar: {
        heroTitle: 'نبتكر الظلال.. لنصنع الفخامة',
        heroSubtitle: '15 عاماً من التميز الهندسي في جدة',
        explore: 'استكشف عالمنا',
        callNow: 'اتصل الآن',
        services: 'خدماتنا',
        contact: 'تواصل معنا',
        details: 'عرض التفاصيل',

        // Services - SEO Optimized & Technical Specs
        carShadesTitle: 'مظلات سيارات جدة',
        carShadesDesc: 'تركيب مظلات سيارات بأحدث الخامات العالمية: قماش PVC كوري وألماني (وزن 1100 جم)، وبولي إيثيلين أسترالي عالي الكثافة. نعلمل على كافة التصاميم: مظلات كابولي، هرمية، ومخروطية للفلل والقصور والمواقف العامة.',
        carShadesFeature: 'ضمان 10 سنوات (PVC/PVDF)',

        pergolasTitle: 'تركيب برجولات حدائق',
        pergolasDesc: 'برجولات جلسات راقية بتصاميم مودرن وكلاسيك. نستخدم خشب (WPC) المعالج ضد الرطوبة والحشرات، ودهانات نارية مقاومة للصدأ للبرجولات الحديدية. خيارات تغطية متعددة: لكسان، قماش، أو تيوبات.',
        pergolasFeature: 'خشب WPC ضمان 15 سنة',

        tentsTitle: 'خيام ملكية وبيوت شعر',
        tentsDesc: 'تفصيل بيوت شعر ملكية وخيام ثابتة، مبطنة بالسدو التراثي الفاخر مع عوازل حرارية ومائية (5 طبقات). تشمل الإنارة المخفية، الدرايش الالمنيوم، والواجهات الزجاجية البانورامية.',
        tentsFeature: 'تجهيز كامل VIP',

        sawatrTitle: 'سواتر ومظلات',
        sawatrDesc: 'سواتر قص ليزر بتصاميم هندسية فريدة، وسواتر شرائح ومجدول (حديد/بلاستيك) توفر نسبة حجب رؤية تصل إلى 100%. نضمن ثبات الألوان ومقاومة الصدأ بفضل الجلفنة والدهانات الحرارية.',
        sawatrFeature: 'سواتر قص ليزر فاخرة',

        panelTitle: 'ساندوتش بانل وهناجر',
        panelDesc: 'توريد وتركيب ألواح ساندوتش بانل (سماكات 5، 7.5، 10 سم) للملاحق والمستودعات. عزل حراري ومائي فائق يحافظ على برودة المكان ويقلل استهلاك الكهرباء.',
        panelFeature: 'عزل معتمد من الكهرباء',

        landscapingTitle: 'تنسيق حدائق وعشب صناعي',
        landscapingDesc: 'عشب صناعي عالي الجودة (سمك 30-50 ملم) لا يحتاج للري، مع ضمان عدم تغير اللون. تصميم شلالات جدارية ونوافير راقصة تضيف حياة للمكان.',
        landscapingFeature: 'عشب كثيف (4 ألوان)',

        hairHousesTitle: 'بيوت شعر جاهزة',
        hairHousesDesc: 'بيوت شعر جاهزة للتركيب الفوري بمقاسات متعددة. هيكل حديدي قوي وتلبيس داخلي فاخر. خيار مثالي للملاحق الإضافية والاستراحات الشتوية.',
        hairHousesFeature: 'سرعة في التنفيذ',

        restorationTitle: 'ترميم مباني ومقاولات',
        restorationDesc: 'خدمات ترميم شاملة: معالجة تشققات الخرسانة، عزل الأسطح (فوم/رولات)، وتجديد الدهانات الداخلية والخارجية (بروفايل، جوتن). إشراف هندسي كامل.',
        restorationFeature: 'إشراف هندسي معتمد',

        contactTitle: 'اطلب عرض سعر الآن',
        location: 'الفرع الرئيسي: طريق الحرمين، جدة',

        // New Section: Qarmid
        qarmidTitle: 'قراميد وعوازل',
        qarmidDesc: 'توريد وتركيب قرميد (إيطالي، إسباني، وطني) بمختلف الأنواع: معدني، حجري، وفخار. يوفر عزلاً مائياً وحرارياً للأسطح والملاحق ويمنع تسرب مياه الأمطار بنسبة 100% مع شكل جمالي كلاسيكي.',
        qarmidFeature: 'ضمان 10 سنوات على العزل',

        // --- Inner Pages Content (Car Shades) ---
        carShadesHeroSubtitle: 'حماية متكاملة وتصاميم هندسية تضفي الفخامة على منزلك',
        carShadesServicesListTitle: 'خدماتنا في المظلات',
        carShadesService1: 'مظلات كابولي',
        carShadesService2: 'مظلات هرمية',
        carShadesService3: 'مظلات مخروطية',
        carShadesService4: 'مظلات شد إنشائي',
        carShadesService5: 'مظلات خشبية',
        needConsultation: 'هل تحتاج استشارة؟',
        consultationDesc: 'مهندسون مختصون جاهزون للرد على استفساراتكم ورفع المقاسات مجاناً.',
        askConsultation: 'اطلب استشارة مجانية',
        whyChooseUs: 'لماذا تختار مظلات ديار جدة؟',
        whyChooseUsDescPart1: 'في أجواء جدة الحارة والرطبة، لا تعد مظلة السيارة مجرد إكسسوار، بل هي ضرورة قصوى لحماية ممتلكاتك. نحن في',
        whyChooseUsDescPart2: 'نقدم لك حلولاً هندسية مبتكرة تجمع بين',
        whyChooseUsDescHighlight1: 'المتانة القصوى',
        whyChooseUsDescHighlight2: 'والتصميم الجمالي',

        csFeature1Title: 'عزل حراري 100%',
        csFeature1Desc: 'أقمشة كورية وألمانية (PVC/PVDF) تحجب الأشعة فوق البنفسجية تماماً.',
        csFeature2Title: 'مقاومة الرياح',
        csFeature2Desc: 'هياكل حديدية بسماكات عالية ومدهونة حرارياً لمقاومة الصدأ والرطوبة.',
        csFeature3Title: 'تصاميم عصرية',
        csFeature3Desc: 'تشكيلة واسعة من التصاميم (مودرن، كلاسيك) تناسب واجهات الفلل والقصور.',
        csFeature4Title: 'ضمان حقيقي',
        csFeature4Desc: 'ضمان شامل يصل إلى 10 سنوات على القماش والهيكل والتركيب.',

        csTypesTitle: 'أنواع مظلات السيارات التي نقدمها',
        csType1Title: '1. مظلات كابولي (Cantilever)',
        csType1Desc: 'الخيار الأول للمواقف العامة والدوائر الحكومية والفلل الفاخرة. تعتمد على قواعد مزدوجة لتوفير مساحة حركة خالية تماماً من الأعمدة الأمامية، مما يسهل ركن السيارة.',
        csType2Title: '2. مظلات إكس (X) شنكار',
        csType2Desc: 'تصميم جذاب وعملي وسعر اقتصادي. تتميز بشكلها الجمالي وسرعة تركيبها، وهي مثالية للمنازل والبيوت.',
        csType3Title: '3. مظلات الشد الإنشائي',
        csType3Desc: 'قمة الفخامة العصرية. نستخدم فيها أقمشة التيفلون (PTFE) أو الـ PVC عالي الكثافة مع تصاميم منحنية انسيابية.',

        csPricingTitle: 'أسعار مظلات السيارات في جدة',
        csPricingDesc: 'نقدم أفضل الأسعار التنافسية مع الحفاظ على أعلى معايير الجودة. السعر يعتمد على المساحة ونوع القماش.',
        priceFrom: 'يبدأ من',
        sar: 'ر.س',
        perMeterKorean: 'للمتر المربع (قماش كوري)',
        perMeterGerman: 'للمتر المربع (قماش ألماني)',
        pricesDisclaimer: '* الأسعار تقريبية وقد تختلف حسب المواصفات والكميات',

        faqTitle: 'الأسئلة الشائعة',
        csFaq1Q: 'كم مدة ضمان مظلات السيارات؟',
        csFaq1A: 'نقدم ضماناً يبدأ من 5 سنوات ويصل إلى 10 سنوات حسب نوع القماش (PVC كوري/ألماني) وجودة الهيكل الحديدي.',
        csFaq2Q: 'هل المظلات مقاومة للحريق؟',
        csFaq2A: 'نعم، جميع أقمشتنا معالجة كيميائياً لتكون مقاومة للاشتعال ولا تساعد على انتشار الحريق.',
        csFaq3Q: 'كم يستغرق التركيب؟',
        csFaq3A: 'في الغالب يتم التركيب خلال يوم واحد للمساحات المتوسطة، بعد تجهيز الهيكل في الورشة لضمان سرعة التنفيذ في الموقع.',

        // --- Inner Pages Content (Pergolas) ---
        pergolasHeroSubtitle: 'لمسة جمالية تحول مساحتك الخارجية إلى واحة من الهدوء',
        pergolasServicesListTitle: 'أنواع البرجولات',
        pergolasService1: 'برجولات خشبية (WPC)',
        pergolasService2: 'برجولات حديد مودرن',
        pergolasService3: 'برجولات قماش',
        pergolasService4: 'برجولات لكسان زجاجي',
        pergolasService5: 'جلسات أسطح',

        pergolasWhyTitle: 'جمال الطبيعة في منزلك',
        pergolasWhyDesc: 'تعتبر البرجولات العنصر الأساسي في تصميم الحدائق والأسطح (Roof Gardens). إنها ليست مجرد مظلة، بل هي قطعة فنية تحدد معالم الجلسة الخارجية وتوفر الظل والخصوصية، مما يسمح لك ولعائلتك بالاستمتاع بالهواء الطلق حتى في أوقات الظهيرة.',

        pFeature1Title: 'خشب معالج WPC',
        pFeature1Desc: 'مظهر الخشب الطبيعي مع مقاومة كاملة للماء، الحشرات، والتسوس بضمان 15 سنة.',
        pFeature2Title: 'دهانات نارية',
        pFeature2Desc: 'هياكل حديدية مدهونة بدهانات السيارات (فرن) لضمان عدم الصدأ وتحمل الرطوبة العالية في جدة.',
        pFeature3Title: 'تغطيات متعددة',
        pFeature3Desc: 'خيارات تغطية بالسقف تشمل اللكسان الشفاف، القماش، أو تيوبات الظل الجزئي.',
        pFeature4Title: 'إنارة مدمجة',
        pFeature4Desc: 'إمكانية دمج وحدات إضاءة LED مخفية لجو ساحر في المساء.',

        pTypesTitle: 'أفكار وتصاميم للبرجولات',
        pType1Title: '1. برجولات الحدائق المودرن',
        pType1Desc: 'تتميز بالخطوط الهندسية البسيطة (Minimalist) والألوان الداكنة مثل الرمادي والأسود، مع دمج الخشب لإضافة الدفء. مثالية للفلل ذات الطراز الحديث.',
        pType2Title: '2. جلسات الأسطح (Rooftops)',
        pType2Desc: 'حول سطح منزلك المهمل إلى استراحة فاخرة. نستخدم برجولات مغطاة باللكسان لحماية الجلسة من الأمطار والغبار، مع إمكانية تركيب تكييف صحراوي أو مراوح رذاذ.',
        pType3Title: '3. البرجولات الكلاسيكية',
        pType3Desc: 'تعتمد على الزخارف الحديدية (قص ليزر) والأعمدة المزخرفة، تناسب القصور والحدائق الكبيرة ذات الطابع التقليدي.',

        engineerTipTitle: 'نصيحة المهندس:',
        engineerTipDesc: 'عند اختيار مكان البرجولة، راعي اتجاه الشمس وحركة الرياح. نوصي بتركيب البرجولة في الجهة الشمالية أو الشرقية للمنزل للاستفادة من الظل الطبيعي في أوقات الظهيرة.',

        // --- Inner Pages Content (Tents) ---
        tentsPageTitle: 'خيام ملكية وبيوت شعر',
        tentsHeroSubtitle: 'أصالة الماضي وفخامة الحاضر في مجالس تليق بضيوفك',
        tentsServicesListTitle: 'أنواع الخيام وبيوت الشعر',
        tentsService1: 'خيام ملكية (Royal Tents)',
        tentsService2: 'بيوت شعر جاهزة',
        tentsService3: 'مجالس تراثية (Sadu)',
        tentsService4: 'خيام زجاجية (Glass Tents)',
        tentsService5: 'خيام الحفلات والمناسبات',

        tentsWhyTitle: 'لماذا تختار الخيام الملكية من ديار جدة؟',
        tentsWhyDesc: 'نجمع بين التراث العربي الأصيل وأحدث تقنيات البناء والعزل. خيامنا ليست مجرد مكان للجلوس، بل هي تحفة فنية تعكس كرم الضيافة وذوقك الرفيع.',

        tFeature1Title: 'هيكل حديدي متين',
        tFeature1Desc: 'تيوبات ومربعات حديدية مدعمة، مدهونة حرارياً لمقاومة الصدأ والظروف المناخية القاسية.',
        tFeature2Title: 'عزل كامل (5 طبقات)',
        tFeature2Desc: 'طبقات متعددة من العوازل الحرارية والمائية، تشمل الشراع الكوري (PVC) والبطانة الداخلية الفاخرة.',
        tFeature3Title: 'ديكور داخلي فاخر',
        tFeature3Desc: 'تصاميم سدو تراثية أو ديكورات ملكية حديثة، مع إنارة مخفية (Hidden Lights) وتكييف مركزي أو سبليت.',
        tFeature4Title: 'واجهات زجاجية',
        tFeature4Desc: 'إمكانية إضافة واجهات زجاجية بانورامية (Double Glazed) لعزل الصوت والحرارة مع إطلالة رائعة.',

        tTypesTitle: 'أشكال وتصاميم الخيام',
        tType1Title: '1. الخيام الملكية (Royal Tents)',
        tType1Desc: 'الخيار الأمثل للمجالس الرئيسية في الفلل والقصور. تتميز بالفخامة المطلقة من الداخل والخارج، مع إمكانية إضافة مشبات رخام وديكورات جبسية.',
        tType2Title: '2. بيوت الشعر الجاهزة',
        tType2Desc: 'حل سريع وعملي بتكلفة مناسبة. يتم تجهيزها في المصنع وتركيبها في الموقع خلال وقت قياسي، مع الاحتفاظ بالطابع البدوي الأصيل.',
        tType3Title: '3. الخيام الزجاجية (Glass Tents)',
        tType3Desc: 'تصميم مودرن يجمع بين هيكل الألمنيوم والزجاج المقوى. مثالية للاستمتاع بمنظر الحديقة مع التكييف الكامل.',

        // --- Inner Pages Content (Sawatr) ---
        sawatrPageTitle: 'سواتر ومظلات للاحواش',
        sawatrHeroSubtitle: 'خصوصية تامة وتصاميم عصرية تضيف جمالاً لمنزلك',
        sawatrServicesListTitle: 'أنواع السواتر الأكثر طلباً',
        sawatrService1: 'سواتر حديد (قص ليزر)',
        sawatrService2: 'سواتر قماش (PVC/بولي إيثيلين)',
        sawatrService3: 'سواتر شرائح ومجدول',
        sawatrService4: 'سواتر بلاستيك (خشب صناعي)',
        sawatrService5: 'سواتر زجاجية (لكسان)',

        sawatrWhyTitle: 'لماذا تختار سواتر ديار جدة؟',
        sawatrWhyDesc: 'نقدم حلول حجب رؤية متكاملة تجمع بين القوة والجمال. سواء كنت تبحث عن الأمان، الخصوصية، أو الشكل الجمالي، لدينا التصميم المناسب لمنزلك بأفضل الخامات والضمانات.',

        sFeature1Title: 'خصوصية وأمان 100%',
        sFeature1Desc: 'تصاميم هندسية تضمن حجب الرؤية تماماً مع السماح بمرور الهواء، مما يوفر لك راحة البال والحرية داخل منزلك.',
        sFeature2Title: 'مقاومة الصدأ والتآكل',
        sFeature2Desc: 'نستخدم حديد مجلفن وسماكات عالية مع دهانات نارية (فرن) لضمان ثبات اللون وعدم الصدأ لسنوات طويلة.',
        sFeature3Title: 'تصاميم قص ليزر عصرية',
        sFeature3Desc: 'أحدث تشكيلات قص الليزر (Laser Cut) برسومات زخرفية وهندسية تزيد من فخامة سور الفيلا.',
        sFeature4Title: 'تنوع الخامات والأسعار',
        sFeature4Desc: 'خيارات متعددة تناسب جميع الميزانيات، من سواتر القماش الاقتصادية إلى سواتر الحديد واللكسان الفاخرة.',

        sTypesTitle: 'كتالوج سواتر ديار جدة 2026',
        sType1Title: '1. سواتر الحديد (قص ليزر & شرائح)',
        sType1Desc: 'الأكثر طلباً وتحملاً. تأتي بتصاميم "بوغاتي"، "مجدول"، و "شرائح" (Abjur). تتميز بالقوة والمتانة العالية، ويمكن دهانها بأي لون يطابق دهان الفيلا.',
        sType2Title: '2. سواتر قماش (PVC & بولي إيثيلين)',
        sType2Desc: 'الخيار الاقتصادي والعملي. نستخدم قماش كوري وأسترالي عالي الكثافة يحجب الرؤية ويسمح بمرور الهواء بنسبة 100%. مناسب للفلل المؤجرة والحلول المؤقتة.',
        sType3Title: '3. سواتر بلاستيك (خشب معالج)',
        sType3Desc: 'تجمع بين فخامة شكل الخشب ومتانة البلاستيك. مقاومة للماء والتسوس، وتأتي بنوعين: شرائح لوفر (Louver) ومجدول، بألوان خشبية طبيعية رائعة.',

        // --- Inner Pages Content (Sandwich Panel) ---
        panelPageTitle: 'ساندوتش بانل وهناجر',
        panelHeroSubtitle: 'عزل حراري مثالي وحلول بناء سريعة واقتصادية',
        panelServicesListTitle: 'خدمات الساندوتش بانل والهناجر',
        panelService1: 'غرف ساندوتش بانل',
        panelService2: 'هناجر ومستودعات',
        panelService3: 'ملاحق جاهزة',
        panelService4: 'أسقف ساندوتش بانل',

        panelWhyTitle: 'لماذا تختار ساندوتش بانل ديار جدة؟',
        panelWhyDesc: 'نقدم أحدث تقنيات البناء الجاهز باستخدام ألواح الساندوتش بانل المعزولة، التي توفر عليك الوقت والمال وتضمن لك بيئة داخلية معتدلة الحرارة طوال العام.',

        pnFeature1Title: 'عزل حراري فائق (5cm - 10cm)',
        pnFeature1Desc: 'ألواح محشوة بمادة البولي يوريثان (PUR) أو الصوف الصخري، توفر عزلاً يصل إلى خمسة أضعاف الخرسانة.',
        pnFeature2Title: 'سرعة التنفيذ',
        pnFeature2Desc: 'تركيب الغرف والملاحق في أيام معدودة بدلاً من شهور البناء التقليدي.',
        pnFeature3Title: 'مقاومة كاملة',
        pnFeature3Desc: 'مقاوم للماء، الرطوبة، الصدأ، واشتعال النار (Fire Rated)، مع عمر افتراضي طويل.',
        pnFeature4Title: 'تكلفة اقتصادية',
        pnFeature4Desc: 'توفير كبير في تكاليف البناء والكهرباء (التكييف) بفضل العزل الممتاز.',

        pnTypesTitle: 'استخدامات الساندوتش بانل',
        pnType1Title: '1. الملاحق والغرف الجاهزة',
        pnType1Desc: 'إضافة مساحات سكنية إضافية (مجالس، غرف سائقين) فوق الأسطح أو في الأحواش بدون الحاجة لأعمدة خرسانية ثقيلة.',
        pnType2Title: '2. الهناجر والمستودعات',
        pnType2Desc: 'تنفيذ مستودعات وهناجر تجارية وصناعية بمساحات شاسعة، مع ضمان العزل لحماية البضائع.',
        pnType3Title: '3. تغطية المسابح والأسطح',
        pnType3Desc: 'حل مثالي لتغطية المسابح لحمايتها من الغبار والشمس مع الحفاظ على درجة حرارة المياه.',

        // --- Inner Pages Content (Landscaping) ---
        landscapingPageTitle: 'تنسيق حدائق وشلالات',
        landscapingHeroSubtitle: 'نحول حديقتك إلى جنة خضراء تسر الناظرين',
        landscapingServicesListTitle: 'خدمات التنسيق والزراعة',
        landscapingService1: 'تصميم وتركيب شبكات الري',
        landscapingService2: 'زراعة النخيل والأشجار',
        landscapingService3: 'شلالات ونوافير',
        landscapingService4: 'عشب صناعي وطبيعي',
        landscapingService5: 'ممرات وحجارة زينة',

        landscapingWhyTitle: 'لماذا تختار خدمة تنسيق الحدائق من ديار جدة؟',
        landscapingWhyDesc: 'نقدم خدمات متكاملة لتنسيق الحدائق، بدءاً من التصميم ثلاثي الأبعاد وصولاً إلى التنفيذ والصيانة، مع ضمان جودة النباتات والديكورات.',

        lsFeature1Title: 'تصاميم 3D',
        lsFeature1Desc: 'نصمم حديقتك بتقنية ثلاثية الأبعاد لتراها قبل التنفيذ الفعلي.',
        lsFeature2Title: 'عشب صناعي عالي الجودة',
        lsFeature2Desc: 'تركيب عشب صناعي كثيف وناعم ومقاوم للشمس بضمانات طويلة.',
        lsFeature3Title: 'شلالات ونوافير مميزة',
        lsFeature3Desc: 'تصميم وتركيب شلالات جدارية ونوافير راقصة تضفي حيوية للمكان.',
        lsFeature4Title: 'صيانة دورية',
        lsFeature4Desc: 'عقود صيانة شهرية وسنوية لضمان بقاء حديقتك نضرة وجميلة.',

        lsTypesTitle: 'أفكار لتنسيق حديقتك',
        lsType1Title: '1. العشب الجداري والأرضي',
        lsType1Desc: 'تكسية الجدران والأرضيات بالعشب الصناعي ليعطي مظهراً طبيعياً خلاباً بدون الحاجة للري.',
        lsType2Title: '2. الشلالات المنزلية',
        lsType2Desc: 'شلالات بتصاميم صخرية أو مودرن مع إضاءة LED، تخلق جواً من الاسترخاء بصوت خرير الماء.',
        lsType3Title: '3. الممرات والممشى الحجري',
        lsType3Desc: 'تصميم ممرات حجرية وعشوائية وسط العشب لتسهيل الحركة وإضافة لمسة جمالية.',

        // --- Inner Pages Content (Restoration) ---
        restorationPageTitle: 'ترميم المباني والفلل',
        restorationHeroSubtitle: 'نعيد لمنزلك شبابه ورونقه بأعلى معايير الجودة',
        restorationServicesListTitle: 'خدمات الترميم والصيانة',
        restorationService1: 'ترميم واجهات الفلل',
        restorationService2: 'ترميم داخلي وخارجي',
        restorationService3: 'معالجة الشروخ والتصدعات',
        restorationService4: 'دهانات وديكورات حديثة',

        restorationWhyTitle: 'لماذا تختار خدمة الترميم من ديار جدة؟',
        restorationWhyDesc: 'فريق هندسي متخصص في الكشف عن أسباب التصدعات ومعالجتها جذرياً بأحدث المواد، مع تجديد شامل للدهانات والسباكة والكهرباء.',

        rFeature1Title: 'فحص هندسي شامل',
        rFeature1Desc: 'كشف دقيق عن تسربات المياه وتصدع الخرسانة قبل البدء في الترميم.',
        rFeature2Title: 'مواد معالجة عالمية',
        rFeature2Desc: 'استخدام مواد إيبوكسية وألياف كربونية لتدعيم الأعمدة والأسقف.',
        rFeature3Title: 'تسليم مفتاح',
        rFeature3Desc: 'نتولى كافة أعمال الهدم، البناء، اللياسة، الدهان، وحتى التنظيف النهائي.',
        rFeature4Title: 'تجديد الديكور',
        rFeature4Desc: 'تحديث التصميم الداخلي والخارجي ليواكب أحدث صيحات الموضة.',

        rTypesTitle: 'أعمالنا في الترميم',
        rType1Title: '1. ترميم الواجهات',
        rType1Desc: 'تجديد واجهات الحجر والبروفايل، وإضافة لمسات إضاءة عصرية.',
        rType2Title: '2. الترميم الداخلي',
        rType2Desc: 'تكسير وتجديد الحمامات والمطابخ، وتغيير الأرضيات والأسقف المستعارة.',

        // --- Inner Pages Content (Qarmid) ---
        qarmidPageTitle: 'تركيب قرميد معدني وفخار',
        qarmidHeroSubtitle: 'لمسة كلاسيكية فاخرة وعزل حراري للأسطح',
        qarmidServicesListTitle: 'أنواع القرميد',
        qarmidService1: 'قرميد إيطالي',
        qarmidService2: 'قرميد إسباني',
        qarmidService3: 'قرميد معدني كوري',
        qarmidService4: 'قرميد وطني (يمامة)',

        qarmidWhyTitle: 'مميزات تركيب القرميد',
        qarmidWhyDesc: 'القرميد ليس مجرد ديكور، بل هو طبقة حماية إضافية (Roofing) تمنع تسرب مياه الأمطار وتعزل الحرارة عن الغرف العلوية.',

        qFeature1Title: 'عزل مائي 100%',
        qFeature1Desc: 'تركيب طبقات عزل وميول تضمن انسياب مياه الأمطار وعدم ركودها.',
        qFeature2Title: 'ثبات الألوان',
        qFeature2Desc: 'قرميد معالج ومدهون بأفران حرارية لا يتغير لونه مع الشمس.',
        qFeature3Title: 'تنوع الأشكال',
        qFeature3Desc: 'ألوان متعددة (أحمر، كحلي، أخضر، أسود) تناسب كافة الأذواق.',
        qFeature4Title: 'خفة الوزن',
        qFeature4Desc: 'القرميد المعدني يتميز بخفة وزنه وعدم تأثيره على أحمال المبنى.',

        qTypesTitle: 'أنواع القرميد المتوفرة',
        qType1Title: '1. القرميد المعدني',
        qType1Desc: 'أحدث الأنواع وأكثرها طلباً، مكون من الومنيوم وتيتانيوم ومغطى بحبيبات حجرية.',
        qType2Title: '2. القرميد الفخار (الطبيعي)',
        qType2Desc: 'مصنوع من الطين المحروق، يعطي برودة للمبنى وشكل كلاسيكي فخم.',

        // --- Footer Content ---
        footerAbout: 'عن ديار جدة',
        footerAboutDesc: 'مؤسسة رائدة في مجال تركيب المظلات والسواتر والبرجولات وتشطيب المباني في جدة ومكة وضواحيها، بخبرة تمتد لسنوات وفريق هندسي محترف.',
        footerQuickLinks: 'روابط سريعة',
        footerServices: 'خدماتنا',
        footerContact: 'تواصل معنا',
        footerRights: 'جميع الحقوق محفوظة © 2026 ديار جدة العالمية.',
        footerAddress: 'المملكة العربية السعودية، جدة',

        // --- Contact Page ---
        contactPageTitle: 'اتصل بنا',
        contactHeroSubtitle: 'نحن هنا للإجابة على استفساراتكم وخدمتكم في أي وقت.',
        contactFormTitle: 'أرسل لنا رسالة',
        fieldName: 'الاسم الكريم',
        fieldPhone: 'رقم الجوال',
        fieldSubject: 'نوع الخدمة المطلوبة',
        fieldMessage: 'تفاصيل الرسالة',
        btnSend: 'إرسال الطلب',
        contactInfoTitle: 'معلومات التواصل',
        workingHoursTitle: 'ساعات العمل',
        workingHoursDesc: 'يومياً من الساعة 8 صباحاً حتى 11 مساءً',
    },
    en: {
        heroTitle: 'Innovating Shades.. Crafting Luxury',
        heroSubtitle: '15 Years of Engineering Excellence in Jeddah',
        explore: 'Explore Our World',
        callNow: 'Call Now',
        services: 'Our Services',
        contact: 'Contact Us',
        details: 'View Details',

        // --- Footer Content ---
        footerAbout: 'About Diyar Jeddah',
        footerAboutDesc: 'A leading establishment in installing shades, screens, pergolas, and building finishing in Jeddah and Mecca, with years of experience and a professional engineering team.',
        footerQuickLinks: 'Quick Links',
        footerServices: 'Our Services',
        footerContact: 'Contact Us',
        footerRights: 'All Rights Reserved © 2026 Diyar Jeddah Global.',
        footerAddress: 'Jeddah, Kingdom of Saudi Arabia',

        // Services
        carShadesTitle: 'Car Shades',
        carShadesDesc: 'Complete protection for your car from scorching sun and harsh weather. Modern designs suitable for villas and public parking.',
        carShadesFeature: '100% Protection',

        pergolasTitle: 'Pergolas',
        pergolasDesc: 'Luxurious outdoor seating made of treated wood or metal. Adds an aesthetic touch to your garden and provides comfortable shade.',
        pergolasFeature: 'Modern Wood',

        tentsTitle: 'Royal Tents',
        tentsDesc: 'Heritage majlises with a modern touch. Fully equipped with decorations, lighting, and air conditioning to welcome your guests at the highest level.',
        tentsFeature: 'Luxury Interior',

        sawatrTitle: 'Screens (Sawatr)',
        sawatrDesc: 'Complete privacy for your home with iron or wooden screens in innovative designs that allow air flow and block vision.',
        sawatrFeature: 'Complete Privacy',

        panelTitle: 'Sandwich Panels',
        panelDesc: 'Superior thermal and water insulation solutions for annexes and warehouses. Fast installation and high energy efficiency.',
        panelFeature: 'Thermal Insulation',

        landscapingTitle: 'Landscaping',
        landscapingDesc: 'Transforming outdoor spaces into green oases. Design and installation of artificial grass, waterfalls, and fountains.',
        landscapingFeature: 'Green Oasis',

        hairHousesTitle: 'Hair Houses',
        hairHousesDesc: 'The authenticity of the past with the quality of the present. Hair houses equipped with all comforts while maintaining the authentic Bedouin character.',
        hairHousesFeature: 'Authentic Heritage',

        restorationTitle: 'Restoration & Maintenance',
        restorationDesc: 'Bringing old buildings back to life. Comprehensive restoration services, crack treatment, and facade renovation.',
        restorationFeature: 'Full Renewal',

        contactTitle: 'Contact Us',
        location: 'Jeddah, Saudi Arabia',

        // New Section: Qarmid
        qarmidTitle: 'Roof Tiles (Qarmid)',
        qarmidDesc: 'Supply and installation of roof tiles (Italian, Spanish, National). Available in metal, stone, and clay types. Provides superior water and thermal insulation for roofs keeping them 100% leak-free with a classic aesthetic.',
        qarmidFeature: '10-Year Warranty',

        // --- Inner Pages Content (Car Shades) ---
        carShadesHeroSubtitle: 'Integrated protection and engineering designs adding luxury to your home',
        carShadesServicesListTitle: 'Our Shades Services',
        carShadesService1: 'Cantilever Shades',
        carShadesService2: 'Pyramid Shades',
        carShadesService3: 'Cone Shades',
        carShadesService4: 'Tensile Structures',
        carShadesService5: 'Wooden Shades',
        needConsultation: 'Need a Consultation?',
        consultationDesc: 'Expert engineers ready to answer your inquiries and take measurements for free.',
        askConsultation: 'Request Free Consultation',
        whyChooseUs: 'Why Choose Diyar Jeddah Shades?',
        whyChooseUsDescPart1: 'In Jeddah’s hot and humid climate, a car shade is not just an accessory, it is a necessity to protect your property. At',
        whyChooseUsDescPart2: 'we offer innovative engineering solutions combining',
        whyChooseUsDescHighlight1: 'Maximum Durability',
        whyChooseUsDescHighlight2: 'and Aesthetic Design',

        csFeature1Title: '100% Heat Insulation',
        csFeature1Desc: 'Korean and German fabrics (PVC/PVDF) that completely block UV rays.',
        csFeature2Title: 'Wind Resistance',
        csFeature2Desc: 'Heavy-duty steel structures thermally painted to resist rust and humidity.',
        csFeature3Title: 'Modern Designs',
        csFeature3Desc: 'Wide range of designs (modern, classic) suitable for villas and palaces.',
        csFeature4Title: 'Real Warranty',
        csFeature4Desc: 'Comprehensive warranty up to 10 years on fabric, structure, and installation.',

        csTypesTitle: 'Car Shade Types We Offer',
        csType1Title: '1. Cantilever Shades',
        csType1Desc: 'Top choice for public parking, government buildings, and luxury villas. Relies on double bases to provide column-free movement space, making parking easier.',
        csType2Title: '2. X-Style Shades',
        csType2Desc: 'Attractive, practical, and economical design. Known for aesthetic appeal and quick installation, ideal for homes.',
        csType3Title: '3. Tensile Structures',
        csType3Desc: 'The pinnacle of modern luxury. We use PTFE (Teflon) or high-density PVC with streamlined curved designs.',

        csPricingTitle: 'Car Shades Prices in Jeddah',
        csPricingDesc: 'We offer competitive prices while maintaining the highest quality standards. Price depends on area and fabric type.',
        priceFrom: 'Starting from',
        sar: 'SAR',
        perMeterKorean: 'per sqm (Korean Fabric)',
        perMeterGerman: 'per sqm (German Fabric)',
        pricesDisclaimer: '* Prices are approximate and may vary based on specifications and quantity',

        faqTitle: 'Frequently Asked Questions',
        csFaq1Q: 'How long is the warranty?',
        csFaq1A: 'We offer warranties starting from 5 years up to 10 years depending on fabric type (Korean/German PVC) and structure quality.',
        csFaq2Q: 'Are the shades fire-resistant?',
        csFaq2A: 'Yes, all our fabrics are chemically treated to be fire-retardant.',
        csFaq3Q: 'How long does installation take?',
        csFaq3A: 'Usually, installation is completed within one day for average spaces, after preparing the structure in our workshop.',

        // --- Inner Pages Content (Pergolas) ---
        pergolasHeroSubtitle: 'A touch of beauty turning your outdoor space into an oasis of calm',
        pergolasServicesListTitle: 'Pergola Types',
        pergolasService1: 'WPC Wooden Pergolas',
        pergolasService2: 'Modern Steel Pergolas',
        pergolasService3: 'Fabric Pergolas',
        pergolasService4: 'Glass/Lexan Pergolas',
        pergolasService5: 'Rooftop Seating',

        pergolasWhyTitle: 'Nature’s Beauty in Your Home',
        pergolasWhyDesc: 'Pergolas are essential elements in garden and rooftop design. More than just a shade, they are art pieces defining your outdoor space, providing shade and privacy for you and your family.',

        pFeature1Title: 'Treated WPC Wood',
        pFeature1Desc: 'Natural wood look with complete resistance to water, insects, and decay, with a 15-year warranty.',
        pFeature2Title: 'Thermal Painting',
        pFeature2Desc: 'Steel structures painted with automotive-grade (oven) paint to ensure rust resistance in Jeddah’s humidity.',
        pFeature3Title: 'Multiple Coverings',
        pFeature3Desc: 'Roofing options include transparent Lexan, fabric, or partial shade tubes.',
        pFeature4Title: 'Integrated Lighting',
        pFeature4Desc: 'Option to integrate hidden LED lighting for a magical evening atmosphere.',

        pTypesTitle: 'Pergola Ideas and Designs',
        pType1Title: '1. Modern Garden Pergolas',
        pType1Desc: 'Characterized by minimalist geometric lines and dark colors like gray and black, integrated with wood for warmth. Ideal for modern villas.',
        pType2Title: '2. Rooftop Seating',
        pType2Desc: 'Turn your neglected roof into a luxury lounge. We use Lexan-covered pergolas to protect from rain and dust, with options for AC or mist fans.',
        pType3Title: '3. Classic Pergolas',
        pType3Desc: 'Relies on laser-cut iron motifs and decorative columns, suitable for palaces and large traditional gardens.',

        engineerTipTitle: 'Engineer’s Tip:',
        engineerTipDesc: 'When choosing a pergola location, consider sun direction and wind movement. We recommend installing on the north or east side to benefit from natural shade in the afternoon.',

        // --- Inner Pages Content (Tents) ---
        tentsPageTitle: 'Royal Tents & Hair Houses',
        tentsHeroSubtitle: 'The authenticity of the past and the luxury of the present in majlises worthy of your guests.',
        tentsServicesListTitle: 'Tent Types & Services',
        tentsService1: 'Royal Tents',
        tentsService2: 'Ready-Made Hair Houses',
        tentsService3: 'Heritage Majlis (Sadu)',
        tentsService4: 'Glass Tents',
        tentsService5: 'Event Tents',

        tentsWhyTitle: 'Why Choose Royal Tents from Diyar Jeddah?',
        tentsWhyDesc: 'We combine authentic Arab heritage with the latest construction and insulation technologies. Our tents are not just a place to sit, but a masterpiece reflecting hospitality and your refined taste.',

        tFeature1Title: 'Durable Steel Structure',
        tFeature1Desc: 'Reinforced steel tubes and squares, thermally painted to resist rust and harsh weather conditions.',
        tFeature2Title: 'Full Insulation (5 Layers)',
        tFeature2Desc: 'Multiple layers of thermal and water insulation, including Korean PVC canvas and luxurious inner lining.',
        tFeature3Title: 'Luxury Interior Decor',
        tFeature3Desc: 'Traditional Sadu designs or modern royal decorations, with hidden lights and central or split air conditioning.',
        tFeature4Title: 'Glass Facades',
        tFeature4Desc: 'Option to add panoramic double-glazed facades for sound and heat insulation with a magnificent view.',

        tTypesTitle: 'Tent Styles & Designs',
        tType1Title: '1. Royal Tents',
        tType1Desc: 'The perfect choice for main majlises in villas and palaces. Characterized by absolute luxury inside and out, with options for marble fireplaces and gypsum decorations.',
        tType2Title: '2. Ready-Made Hair Houses',
        tType2Desc: 'A quick, practical, and cost-effective solution. Prepared in the factory and installed on-site in record time, maintaining the authentic Bedouin character.',
        tType3Title: '3. Glass Tents',
        tType3Desc: 'Modern design combining aluminum structure and tempered glass. Ideal for enjoying the garden view with full air conditioning.',

        // --- Inner Pages Content (Sawatr) ---
        sawatrPageTitle: 'Privacy Screens & Sawatr',
        sawatrHeroSubtitle: 'Complete privacy and modern designs adding beauty to your home.',
        sawatrServicesListTitle: 'Most Requested Screens',
        sawatrService1: 'Steel Screens (Laser Cut)',
        sawatrService2: 'Fabric Screens (PVC/Polyethylene)',
        sawatrService3: 'Louver & Braided Screens',
        sawatrService4: 'Plastic Wood Screens',
        sawatrService5: 'Glass Screens (Lexan)',

        sawatrWhyTitle: 'Why Choose Diyar Jeddah Screens?',
        sawatrWhyDesc: 'We offer complete vision-blocking solutions combining strength and beauty. Whether you seek security, privacy, or aesthetic appeal, we have the right design with the best materials and warranties.',

        sFeature1Title: '100% Privacy & Security',
        sFeature1Desc: 'Geometric designs ensuring complete vision blockage while allowing air flow, providing peace of mind and freedom inside your home.',
        sFeature2Title: 'Rust & Corrosion Resistance',
        sFeature2Desc: 'We use high-thickness galvanized steel with thermal (oven) paint to ensure color stability and rust resistance for years.',
        sFeature3Title: 'Modern Laser Cut Designs',
        sFeature3Desc: 'Latest Laser Cut collections with decorative and geometric patterns increasing the luxury of your villa fence.',
        sFeature4Title: 'Variety of Materials & Prices',
        sFeature4Desc: 'Multiple options to suit all budgets, from economical fabric screens to luxurious iron and Lexan screens.',

        sTypesTitle: 'Diyar Jeddah Screens Catalog 2026',
        sType1Title: '1. Iron Screens (Laser Cut & Louver)',
        sType1Desc: 'Most requested and durable. Available in "Bgati", "Braided", and "Louver" (Abjur) designs. Characterized by high strength and durability, paintable in any color matching the villa.',
        sType2Title: '2. Fabric Screens (PVC & Polyethylene)',
        sType2Desc: 'The economical and practical choice. We use high-density Korean and Australian fabric that blocks vision and allows 100% air flow. Suitable for rented villas and temporary solutions.',
        sType3Title: '3. Plastic Wood Screens',
        sType3Desc: 'Combines the luxury of wood appearance and plastic durability. Water and decay resistant, available in two types: Louver and Braided, in stunning natural wood colors.',

        // --- Inner Pages Content (Sandwich Panel) ---
        panelPageTitle: 'Sandwich Panels & Hangars',
        panelHeroSubtitle: 'Perfect thermal insulation and fast, economical construction solutions.',
        panelServicesListTitle: 'Panel & Hangar Services',
        panelService1: 'Sandwich Panel Rooms',
        panelService2: 'Hangars & Warehouses',
        panelService3: 'Ready Annexes',
        panelService4: 'Panel Roofs',

        panelWhyTitle: 'Why Choose Diyar Jeddah Sandwich Panels?',
        panelWhyDesc: 'We offer the latest prefabricated construction technologies using insulated sandwich panels, saving you time and money and ensuring a moderate indoor environment year-round.',

        pnFeature1Title: 'Superior Thermal Insulation',
        pnFeature1Desc: 'Panels filled with Polyurethane (PUR) or Rock Wool, providing insulation up to 5 times better than concrete.',
        pnFeature2Title: 'Fast Execution',
        pnFeature2Desc: 'Installation of rooms and annexes in days instead of months of traditional construction.',
        pnFeature3Title: 'Complete Resistance',
        pnFeature3Desc: 'Resistant to water, humidity, rust, and fire (Fire Rated), with a long lifespan.',
        pnFeature4Title: 'Economical Cost',
        pnFeature4Desc: 'Significant savings in construction costs and electricity (AC) thanks to excellent insulation.',

        pnTypesTitle: 'Sandwich Panel Uses',
        pnType1Title: '1. Ready Annexes & Rooms',
        pnType1Desc: 'Adding extra residential spaces (Majlis, driver rooms) on rooftops or yards without heavy concrete columns.',
        pnType2Title: '2. Hangars & Warehouses',
        pnType2Desc: 'Execution of commercial and industrial warehouses with vast spaces, ensuring insulation to protect goods.',
        pnType3Title: '3. Pool & Roof Covers',
        pnType3Desc: 'Ideal solution for covering pools to protect from dust and sun while maintaining water temperature.',

        // --- Inner Pages Content (Landscaping) ---
        landscapingPageTitle: 'Landscaping & Waterfalls',
        landscapingHeroSubtitle: 'Transforming your garden into a green paradise that delights the beholder.',
        landscapingServicesListTitle: 'Landscaping Services',
        landscapingService1: 'Irrigation System Design & Installation',
        landscapingService2: 'Planting Palms & Trees',
        landscapingService3: 'Waterfalls & Fountains',
        landscapingService4: 'Artificial & Natural Grass',
        landscapingService5: 'Pathways & Ornamental Stones',

        landscapingWhyTitle: 'Why Choose Diyar Jeddah Landscaping?',
        landscapingWhyDesc: 'We offer comprehensive landscaping services, starting from 3D design to execution and maintenance, ensuring the quality of plants and decorations.',

        lsFeature1Title: '3D Designs',
        lsFeature1Desc: 'We design your garden in 3D so you can visualize it before actual execution.',
        lsFeature2Title: 'High-Quality Artificial Grass',
        lsFeature2Desc: 'Installation of dense, soft, sun-resistant artificial grass with long warranties.',
        lsFeature3Title: 'Distinctive Waterfalls & Fountains',
        lsFeature3Desc: 'Design and installation of wall waterfalls and dancing fountains adding vitality to the place.',
        lsFeature4Title: 'Periodic Maintenance',
        lsFeature4Desc: 'Monthly and annual maintenance contracts to ensure your garden remains fresh and beautiful.',

        lsTypesTitle: 'Garden Landscaping Ideas',
        lsType1Title: '1. Wall & Floor Grass',
        lsType1Desc: 'Cladding walls and floors with artificial grass to give a stunning natural look without the need for irrigation.',
        lsType2Title: '2. Home Waterfalls',
        lsType2Desc: 'Waterfalls with rocky or modern designs with LED lighting, creating a relaxing atmosphere with the sound of trickling water.',
        lsType3Title: '3. Stone Pathways & Walkways',
        lsType3Desc: 'Designing stone and random pathways amidst the grass to facilitate movement and add an aesthetic touch.',

        // --- Inner Pages Content (Restoration) ---
        restorationPageTitle: 'Building & Villa Restoration',
        restorationHeroSubtitle: 'Restoring the youth and elegance of your home with the highest quality standards.',
        restorationServicesListTitle: 'Restoration & Maintenance Services',
        restorationService1: 'Villa Facade Restoration',
        restorationService2: 'Internal & External Restoration',
        restorationService3: 'Cracks & Fissures Treatment',
        restorationService4: 'Modern Paints & Decor',

        restorationWhyTitle: 'Why Choose Diyar Jeddah Restoration?',
        restorationWhyDesc: 'Specialized engineering team to detect causes of cracks and treat them radically with the latest materials, with comprehensive renovation of paints, plumbing, and electricity.',

        rFeature1Title: 'Comprehensive Engineering Check',
        rFeature1Desc: 'Accurate detection of water leaks and concrete cracks before starting restoration.',
        rFeature2Title: 'Global Treatment Materials',
        rFeature2Desc: 'Using epoxy materials and carbon fibers to reinforce columns and ceilings.',
        rFeature3Title: 'Turnkey Handover',
        rFeature3Desc: 'We handle all demolition, construction, plastering, painting, and even final cleaning.',
        rFeature4Title: 'Decor Renovation',
        rFeature4Desc: 'Updating interior and exterior design to keep up with the latest fashion trends.',

        rTypesTitle: 'Our Restoration Works',
        rType1Title: '1. Facade Restoration',
        rType1Desc: 'Renovating stone and profile facades, and adding modern lighting touches.',
        rType2Title: '2. Interior Restoration',
        rType2Desc: 'Breaking and renovating bathrooms and kitchens, and changing floors and false ceilings.',

        // --- Inner Pages Content (Qarmid) ---
        qarmidPageTitle: 'Metal & Clay Qarmid Installation',
        qarmidHeroSubtitle: 'Luxury classic touch and thermal insulation for roofs.',
        qarmidServicesListTitle: 'Qarmid Types',
        qarmidService1: 'Italian Qarmid',
        qarmidService2: 'Spanish Qarmid',
        qarmidService3: 'Korean Metal Qarmid',
        qarmidService4: 'National Qarmid (Yamama)',

        qarmidWhyTitle: 'Advantages of Installing Qarmid',
        qarmidWhyDesc: 'Qarmid is not just decoration, but an extra protection layer (Roofing) preventing rainwater leakage and insulating heat from upper rooms.',

        qFeature1Title: '100% Water Insulation',
        qFeature1Desc: 'Installing insulation and slope layers ensuring rainwater flow and no stagnation.',
        qFeature2Title: 'Color Stability',
        qFeature2Desc: 'Treated and thermal oven-painted Qarmid that does not change color with sun.',
        qFeature3Title: 'Variety of Shapes',
        qFeature3Desc: 'Multiple colors (Red, Navy, Green, Black) fitting all tastes.',
        qFeature4Title: 'Lightweight',
        qFeature4Desc: 'Metal Qarmid is characterized by its lightweight and does not affect building loads.',

        qTypesTitle: 'Available Qarmid Types',
        qType2Title: '2. Clay Qarmid (Natural)',
        qType2Desc: 'Made of burnt clay, gives coolness to the building and a luxurious classic look.',

        // --- Contact Page ---
        contactPageTitle: 'Contact Us',
        contactHeroSubtitle: 'We are here to answer your inquiries and serve you at any time.',
        contactFormTitle: 'Send us a message',
        fieldName: 'Full Name',
        fieldPhone: 'Mobile Number',
        fieldSubject: 'Service Required',
        fieldMessage: 'Message Details',
        btnSend: 'Send Request',
        contactInfoTitle: 'Contact Information',
        workingHoursTitle: 'Working Hours',
        workingHoursDesc: 'Daily from 8:00 AM to 11:00 PM',
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('ar');
    // Derived state for direction to ensure consistency
    const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        // Update document direction and language on change
        document.documentElement.dir = direction;
        document.documentElement.lang = language;
    }, [language, direction]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
    };

    const t = (key: keyof typeof translations.ar) => {
        const langData = translations[language];
        // Safe access because we typed the key
        return (langData as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
