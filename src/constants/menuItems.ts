import {
  Award,
  BoxMultiple,
  Point,
  AlertCircle,
  Notes,
  Calendar,
  Mail,
  Ticket,
  Edit,
  GitMerge,
  CurrencyDollar,
  Apps,
  FileDescription,
  FileDots,
  Files,
  Ban,
  Star,
  MoodSmile,
  BorderAll,
  BorderHorizontal,
  BorderInner,
  BorderVertical,
  BorderTop,
  UserCircle,
  Package,
  Message2,
  Basket,
  ChartLine,
  ChartArcs,
  ChartCandle,
  ChartArea,
  ChartDots,
  ChartDonut3,
  ChartRadar,
  Login,
  UserPlus,
  Rotate,
  Box,
  ShoppingCart,
  Aperture,
  Layout,
  Settings,
  Help,
  ZoomCode,
  BoxAlignBottom,
  BoxAlignLeft,
  BorderStyle2,
  AppWindow,
} from "tabler-icons-react";
import { uniqueId } from "lodash";
import { MenuitemProps } from "../types/menuItem";

export const Menuitems: MenuitemProps[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Modern",
    icon: Aperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "eCommerce",
    icon: ShoppingCart,
    href: "/dashboards/ecommerce",
  },
  {
    navlabel: true,
    subheader: "Apps",
  },
  {
    id: uniqueId(),
    title: "Contacts",
    icon: Package,
    chip: "2",
    chipColor: "secondary",
    href: "/apps/contacts",
  },

  {
    id: uniqueId(),
    title: "Blog",
    icon: ChartDonut3,
    href: "/apps/blog/",
    children: [
      {
        id: uniqueId(),
        title: "Posts",
        icon: Point,
        href: "/apps/blog/post",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: Point,
        href: "/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Ecommerce",
    icon: Basket,
    href: "/apps/ecommerce/",
    children: [
      {
        id: uniqueId(),
        title: "Shop",
        icon: Point,
        href: "/apps/ecommerce/shop",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: Point,
        href: "/apps/ecommerce/detail/1",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: Point,
        href: "/apps/ecommerce/list",
      },
      {
        id: uniqueId(),
        title: "Checkout",
        icon: Point,
        href: "/apps/ecommerce/checkout",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Chats",
    icon: Message2,
    href: "/apps/chats",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: UserCircle,
    href: "/apps/user-profile/profile",
    children: [
      {
        id: uniqueId(),
        title: "Profile",
        icon: Point,
        href: "/apps/user-profile/profile",
      },
      {
        id: uniqueId(),
        title: "Followers",
        icon: Point,
        href: "/apps/user-profile/followers",
      },
      {
        id: uniqueId(),
        title: "Friends",
        icon: Point,
        href: "/apps/user-profile/friends",
      },
      {
        id: uniqueId(),
        title: "Gallery",
        icon: Point,
        href: "/apps/user-profile/gallery",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Notes",
    icon: Notes,
    href: "/apps/notes",
  },
  {
    id: uniqueId(),
    title: "Calendar",
    icon: Calendar,
    href: "/apps/calendar",
  },
  {
    id: uniqueId(),
    title: "Email",
    icon: Mail,
    href: "/apps/email",
  },
  {
    id: uniqueId(),
    title: "Tickets",
    icon: Ticket,
    href: "/apps/tickets",
  },
  {
    navlabel: true,
    subheader: "Pages",
  },

  {
    id: uniqueId(),
    title: "Treeview",
    icon: GitMerge,
    href: "/theme-pages/treeview",
  },
  {
    id: uniqueId(),
    title: "Pricing",
    icon: CurrencyDollar,
    href: "/theme-pages/pricing",
  },
  {
    id: uniqueId(),
    title: "Account Setting",
    icon: UserCircle,
    href: "/theme-pages/account-settings",
  },
  {
    id: uniqueId(),
    title: "FAQ",
    icon: Help,
    href: "/theme-pages/faq",
  },
  {
    id: uniqueId(),
    title: "Landingpage",
    icon: AppWindow,
    href: "/landingpage",
  },
  {
    id: uniqueId(),
    title: "Widgets",
    icon: Layout,
    href: "/widgets/cards",
    children: [
      {
        id: uniqueId(),
        title: "Cards",
        icon: Point,
        href: "/widgets/cards",
      },
      {
        id: uniqueId(),
        title: "Banners",
        icon: Point,
        href: "/widgets/banners",
      },
      {
        id: uniqueId(),
        title: "Charts",
        icon: Point,
        href: "/widgets/charts",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "Forms",
  },
  {
    id: uniqueId(),
    title: "Form Elements",
    icon: Apps,
    href: "/forms/form-elements/autocomplete",
    children: [
      {
        id: uniqueId(),
        title: "Autocomplete",
        icon: Point,
        href: "/forms/form-elements/autocomplete",
      },
      {
        id: uniqueId(),
        title: "Button",
        icon: Point,
        href: "/forms/form-elements/button",
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: Point,
        href: "/forms/form-elements/checkbox",
      },
      {
        id: uniqueId(),
        title: "Radio",
        icon: Point,
        href: "/forms/form-elements/radio",
      },
      {
        id: uniqueId(),
        title: "Date Time",
        icon: Point,
        href: "/forms/form-elements/date-time",
      },
      {
        id: uniqueId(),
        title: "Slider",
        icon: Point,
        href: "/forms/form-elements/slider",
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: Point,
        href: "/forms/form-elements/switch",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Form Layout",
    icon: FileDescription,
    href: "/forms/form-layout",
  },
  {
    id: uniqueId(),
    title: "Form Horizontal",
    icon: BoxAlignBottom,
    href: "/forms/form-horizontal",
  },
  {
    id: uniqueId(),
    title: "Form Vertical",
    icon: BoxAlignLeft,
    href: "/forms/form-vertical",
  },
  {
    id: uniqueId(),
    title: "Form Custom",
    icon: FileDots,
    href: "/forms/form-custom",
  },
  {
    id: uniqueId(),
    title: "Form Wizard",
    icon: Files,
    href: "/forms/form-wizard",
  },
  {
    id: uniqueId(),
    title: "Form Validation",
    icon: Files,
    href: "/forms/form-validation",
  },
  {
    id: uniqueId(),
    title: "Quill Editor",
    icon: Edit,
    href: "/forms/form-quill",
  },
  {
    navlabel: true,
    subheader: "Tables",
  },
  {
    id: uniqueId(),
    title: "Basic",
    icon: BorderAll,
    href: "/tables/basic",
  },
  {
    id: uniqueId(),
    title: "Collapsible",
    icon: BorderHorizontal,
    href: "/tables/collapsible",
  },
  {
    id: uniqueId(),
    title: "Enhanced",
    icon: BorderInner,
    href: "/tables/enhanced",
  },
  {
    id: uniqueId(),
    title: "Fixed Header",
    icon: BorderVertical,
    href: "/tables/fixed-header",
  },
  {
    id: uniqueId(),
    title: "Pagination",
    icon: BorderTop,
    href: "/tables/pagination",
  },
  {
    id: uniqueId(),
    title: "Search",
    icon: BorderStyle2,
    href: "/tables/search",
  },
  {
    navlabel: true,
    subheader: "UI",
  },
  {
    id: uniqueId(),
    title: "Ui Components",
    icon: Box,
    href: "/ui-components/alert",
    children: [
      {
        id: uniqueId(),
        title: "Alert",
        icon: Point,
        href: "/ui-components/alert",
      },
      {
        id: uniqueId(),
        title: "Accordion",
        icon: Point,
        href: "/ui-components/accordion",
      },
      {
        id: uniqueId(),
        title: "Avatar",
        icon: Point,
        href: "/ui-components/avatar",
      },
      {
        id: uniqueId(),
        title: "Chip",
        icon: Point,
        href: "/ui-components/chip",
      },
      {
        id: uniqueId(),
        title: "Dialog",
        icon: Point,
        href: "/ui-components/dialog",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: Point,
        href: "/ui-components/list",
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: Point,
        href: "/ui-components/popover",
      },
      {
        id: uniqueId(),
        title: "Rating",
        icon: Point,
        href: "/ui-components/rating",
      },
      {
        id: uniqueId(),
        title: "Tabs",
        icon: Point,
        href: "/ui-components/tabs",
      },
      {
        id: uniqueId(),
        title: "Tooltip",
        icon: Point,
        href: "/ui-components/tooltip",
      },
      {
        id: uniqueId(),
        title: "Transfer List",
        icon: Point,
        href: "/ui-components/transfer-list",
      },
      {
        id: uniqueId(),
        title: "Typography",
        icon: Point,
        href: "/ui-components/typography",
      },
    ],
  },

  {
    navlabel: true,
    subheader: "Charts",
  },
  {
    id: uniqueId(),
    title: "Line",
    icon: ChartLine,
    href: "/charts/line",
  },
  {
    id: uniqueId(),
    title: "Gradient",
    icon: ChartArcs,
    href: "/charts/gradient",
  },
  {
    id: uniqueId(),
    title: "Area",
    icon: ChartArea,
    href: "/charts/area",
  },
  {
    id: uniqueId(),
    title: "Candlestick",
    icon: ChartCandle,
    href: "/charts/candlestick",
  },
  {
    id: uniqueId(),
    title: "Column",
    icon: ChartDots,
    href: "/charts/column",
  },
  {
    id: uniqueId(),
    title: "Doughtnut & Pie",
    icon: ChartDonut3,
    href: "/charts/doughnut",
  },
  {
    id: uniqueId(),
    title: "RadialBar & Radar",
    icon: ChartRadar,
    href: "/charts/radialbar",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },

  {
    id: uniqueId(),
    title: "Login",
    icon: Login,
    href: "/auth/auth1/login",
    children: [
      {
        id: uniqueId(),
        title: "Side Login",
        icon: Point,
        href: "/auth/auth1/login",
      },
      {
        id: uniqueId(),
        title: "Boxed Login",
        icon: Point,
        href: "/auth/auth2/login",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: UserPlus,
    href: "/auth/auth1/register",
    children: [
      {
        id: uniqueId(),
        title: "Side Register",
        icon: Point,
        href: "/auth/auth1/register",
      },
      {
        id: uniqueId(),
        title: "Boxed Register",
        icon: Point,
        href: "/auth/auth2/register",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Forgot Password",
    icon: Rotate,
    href: "/auth/auth1/forgot-password",
    children: [
      {
        id: uniqueId(),
        title: "Side Forgot Password",
        icon: Point,
        href: "/auth/auth1/forgot-password",
      },
      {
        id: uniqueId(),
        title: "Boxed Forgot Password",
        icon: Point,
        href: "/auth/auth2/forgot-password",
      },
    ],
  },

  {
    id: uniqueId(),
    title: "Two Steps",
    icon: ZoomCode,
    href: "/auth/auth1/two-steps",
    children: [
      {
        id: uniqueId(),
        title: "Side Two Steps",
        icon: Point,
        href: "/auth/auth1/two-steps",
      },
      {
        id: uniqueId(),
        title: "Boxed Two Steps",
        icon: Point,
        href: "/auth/auth2/two-steps",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Error",
    icon: AlertCircle,
    href: "/auth/error",
  },
  {
    id: uniqueId(),
    title: "Maintenance",
    icon: Settings,
    href: "/auth/maintenance",
  },

  {
    navlabel: true,
    subheader: "Other",
  },
  {
    id: uniqueId(),
    title: "Menu Level",
    icon: BoxMultiple,
    href: "/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: Point,
        href: "/l1",
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: Point,
        href: "/l1.1",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: Point,
            href: "/l2",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: Point,
            href: "/l2.1",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: Point,
                href: "/l3",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: Point,
                href: "/l3.1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Disabled",
    icon: Ban,
    href: "",
    disabled: true,
  },
  {
    id: uniqueId(),
    title: "SubCaption",
    subtitle: "This is the sutitle",
    icon: Star,
    href: "",
  },

  {
    id: uniqueId(),
    title: "Chip",
    icon: Award,
    href: "",
    chip: "9",
    chipColor: "primary",
  },
  {
    id: uniqueId(),
    title: "Outlined",
    icon: MoodSmile,
    href: "",
    chip: "outline",
    variant: "outlined",
    chipColor: "primary",
  },
  {
    id: uniqueId(),
    title: "External Link",
    external: true,
    icon: Star,
    href: "https://google.com",
  },
];
