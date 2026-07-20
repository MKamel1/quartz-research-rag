import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  right: [
    // D3 Graph layout tuning for dense codebase graphs (3,252+ nodes)
    // - repelForce (1.5): Triple default repulsion so nodes/clusters push far apart and labels don't overlap
    // - linkDistance (60): Double default edge length gives distinct semantic modules breathing room
    // - centerForce (0.2): Weaker center attraction prevents all 3,250 nodes from collapsing into a tight ball
    Component.Graph({
      localGraph: {
        depth: 1,
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 40,
        fontSize: 0.6,
      },
      globalGraph: {
        depth: -1,
        scale: 1.1,
        repelForce: 1.5,
        centerForce: 0.2,
        linkDistance: 60,
        fontSize: 0.5,
      },
    }),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
