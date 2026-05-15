// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications in reverse chronological order. * indicates first / corresponding author.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, research experience, grants, and professional services.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-a-nasa-heliophysics-guest-investigator-open-grant-527k-as-pi-for-the-study-of-microinjections-in-the-outer-magnetosphere",
          title: 'Awarded a NASA Heliophysics Guest Investigator Open grant ($527k) as PI for the...',
          description: "",
          section: "News",},{id: "news-two-new-papers-on-chorus-spectral-gaps-and-the-fine-structure-of-magnetosonic-waves-published-in-jgr-space-physics",
          title: 'Two new papers on chorus spectral gaps and the fine structure of magnetosonic...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-frontiers-in-astronomy-and-space-sciences-a-comparative-study-of-mlp-cnn-lstm-and-transformer-networks-for-modeling-magnetospheric-ion-distributions",
          title: 'New paper out in Frontiers in Astronomy and Space Sciences: a comparative study...',
          description: "",
          section: "News",},{id: "news-joined-persona-identities-as-a-research-scientist-working-on-machine-learning-for-identity-fraud-detection",
          title: 'Joined Persona Identities as a Research Scientist, working on machine learning for identity...',
          description: "",
          section: "News",},{id: "news-new-paper-accepted-at-the-cvpr-ai4rwc-2026-workshop-layout-aware-representation-learning-for-open-set-id-fraud-discovery",
          title: 'New paper accepted at the CVPR / AI4RWC 2026 workshop: Layout-Aware Representation Learning...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Jinxing_Li_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6E%78%69%6E%67.%6C%69.%38%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jinxing-li-space", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jinxingli87", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0500-1056", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hxd_4oEAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
