export interface DataContentProps {
  menu: {
    nav: Array<{href: string, name: string}>,
    links: Array<{ name: string, url: string }>
  },
  intro: {
    title: string,
    tags: Array<string>,
    location: string,
    textButton: string,
  },
  works: {
    title: string,
    works: Array<{name: string; imgUrl: string; tags: Array<string>, designedBy: string, url: string, urlDescription: string}>;
  },
  about: {
    title: string,
    aboutSubtitle: string,
    text: Array<string>,
    skillSubtitle: string,
    stacks: Array<string>,
    cvURL: string,
  },
  contact: {
    title: string,
    subtitle: string,
    links: Array<{ name: string, url: string }>
  },
  copyright: {
    text: string
  }
}