# Planning Guide

A professional partner showcase page for Vicarius on the Certus Cyber website, presenting Vicarius's vulnerability management and remediation platform to Brazilian cybersecurity professionals.

**Experience Qualities**:
1. **Professional** - Corporate B2B aesthetic that builds trust with enterprise IT and security decision-makers
2. **Informative** - Clear, comprehensive information about Vicarius's capabilities, benefits, and competitive advantages
3. **Action-oriented** - Strategic placement of CTAs to drive demo requests and contact inquiries

**Complexity Level**: Content Showcase (information-focused)
  - Primary focus is presenting Vicarius platform information, features, benefits, and case studies in an organized, persuasive manner typical of B2B SaaS partner pages

## Essential Features

### Hero Section with Value Proposition
- **Functionality**: Displays compelling headline, subheadline, and primary CTA about Vicarius platform
- **Purpose**: Immediately communicate Vicarius's core value and establish Certus Cyber as authorized partner
- **Trigger**: Page load
- **Progression**: User lands on page → Sees hero with value prop → Reads headline about vulnerability management → Clicks CTA for demo/contact
- **Success criteria**: Clear brand presence, compelling value proposition, prominent CTA button

### Platform Overview Section
- **Functionality**: Explains what Vicarius is and its core capabilities (vRx platform)
- **Purpose**: Educate visitors about the platform's purpose and main features
- **Trigger**: User scrolls past hero
- **Progression**: User scrolls → Sees platform description → Understands vulnerability management + remediation capabilities → Learns about automation benefits
- **Success criteria**: Clear explanation of platform, key differentiators highlighted

### Key Features Grid
- **Functionality**: Visual grid showcasing main features (patch management, vulnerability scanning, automation, etc.)
- **Purpose**: Highlight specific capabilities that solve customer pain points
- **Trigger**: User continues scrolling
- **Progression**: User scrolls to features → Sees icon-based feature cards → Reads feature descriptions → Understands technical capabilities
- **Success criteria**: 6-8 key features displayed with icons, titles, and descriptions

### Benefits Section
- **Functionality**: Lists business and technical benefits of using Vicarius
- **Purpose**: Connect features to business outcomes (reduced risk, time savings, compliance)
- **Trigger**: User scrolls through features
- **Progression**: User scrolls → Sees benefits list → Understands ROI and business value → Considers platform for their organization
- **Success criteria**: Clear business benefits with supporting details

### Competitive Advantages
- **Functionality**: Highlights how Vicarius compares to competitors (Tenable, Qualys, ManageEngine, etc.)
- **Purpose**: Position Vicarius as superior alternative to established solutions
- **Trigger**: User evaluates platform
- **Progression**: User scrolls → Sees comparison points → Understands unique differentiators → Validates platform choice
- **Success criteria**: Key advantages over major competitors clearly stated

### Use Cases / Industries Served
- **Functionality**: Shows relevant scenarios and industries where Vicarius excels
- **Purpose**: Help prospects identify with specific use cases
- **Trigger**: User seeks relevance to their situation
- **Progression**: User scrolls → Sees industry/use case cards → Identifies with their scenario → Feels solution is applicable
- **Success criteria**: 3-5 relevant use cases or industries displayed

### Contact/Demo CTA Section
- **Functionality**: Final call-to-action for demo request or contact
- **Purpose**: Convert interested visitors into leads
- **Trigger**: User reaches bottom of page or clicks CTA buttons
- **Progression**: User interested → Clicks CTA → Sees contact information or contact form → Can reach out to Certus Cyber
- **Success criteria**: Prominent CTA with contact options (phone, email, form)

### Partner Badge/Certification
- **Functionality**: Displays Certus Cyber as official Vicarius partner in Brazil
- **Purpose**: Establish credibility and official partnership status
- **Trigger**: Visible throughout page (likely in header or footer)
- **Progression**: User sees partner badge → Trusts relationship is official → Feels confident contacting Certus
- **Success criteria**: Clear partner designation displayed

## Edge Case Handling

- **No JavaScript**: Content remains fully accessible with progressive enhancement for animations
- **Slow connections**: Images lazy load, critical content loads first
- **Mobile users**: Responsive design adapts grid layouts to single column, CTAs remain accessible
- **Multiple CTAs clicked**: All CTAs lead to consistent contact/demo request action
- **Long content**: Sticky navigation or back-to-top button for easy navigation

## Design Direction

The design should feel corporate, trustworthy, and modern with a professional B2B SaaS aesthetic that aligns with cybersecurity industry standards - clean interface with strategic use of color to highlight CTAs and important information, balancing informative content density with breathing room for readability.

## Color Selection

Complementary color scheme with corporate blue and strategic accent colors

- **Primary Color**: Deep corporate blue (oklch(0.45 0.15 250)) - conveys trust, security, and professionalism typical of enterprise cybersecurity brands
- **Secondary Colors**: Lighter blue tint (oklch(0.92 0.02 250)) for backgrounds and subtle navy (oklch(0.25 0.08 250)) for depth
- **Accent Color**: Vibrant cyan/electric blue (oklch(0.65 0.18 230)) for CTAs, highlights, and interactive elements - creates energy and draws attention to action items
- **Foreground/Background Pairings**: 
  - Background (White oklch(0.99 0 0)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 13.2:1 ✓
  - Card (Light blue oklch(0.92 0.02 250)): Dark blue-gray text (oklch(0.25 0.02 250)) - Ratio 11.8:1 ✓
  - Primary (Deep blue oklch(0.45 0.15 250)): White text (oklch(0.99 0 0)) - Ratio 8.1:1 ✓
  - Accent (Cyan oklch(0.65 0.18 230)): White text (oklch(0.99 0 0)) - Ratio 4.6:1 ✓
  - Muted (Light gray oklch(0.95 0 0)): Medium gray text (oklch(0.50 0.01 250)) - Ratio 5.2:1 ✓

## Font Selection

Professional, modern sans-serif typefaces that convey clarity and technological sophistication - using Inter for its excellent readability and contemporary feel.

- **Typographic Hierarchy**:
  - H1 (Page Hero): Inter Bold / 48px / -0.02em letter spacing / line-height 1.1
  - H2 (Section Titles): Inter SemiBold / 36px / -0.01em letter spacing / line-height 1.2
  - H3 (Feature Titles): Inter SemiBold / 24px / normal spacing / line-height 1.3
  - Body (Descriptions): Inter Regular / 16px / normal spacing / line-height 1.6
  - Small (Captions): Inter Regular / 14px / normal spacing / line-height 1.5
  - CTA Buttons: Inter SemiBold / 16px / normal spacing

## Animations

Subtle, professional animations that guide attention and provide polish without distraction - emphasis on smooth transitions and micro-interactions that feel refined.

- **Purposeful Meaning**: Gentle fade-in animations on scroll communicate content revelation, hover effects on cards suggest interactivity, CTA button hover states create engagement invitation
- **Hierarchy of Movement**: Hero section subtle entrance animation on load, section content fades in on scroll intersection, feature cards have gentle hover lift effect, CTA buttons have smooth color transitions

## Component Selection

- **Components**: 
  - Card (for feature grid items and benefit cards) - with subtle shadow and hover elevation
  - Button (for CTAs) - primary variant for main actions, outline for secondary
  - Badge (for partner certification display)
  - Separator (for section divisions)
  - Scroll-area (if content sections need contained scrolling)
  
- **Customizations**: 
  - Hero section - custom full-width layout with background gradient
  - Feature grid - custom 3-column responsive grid with icon integration
  - Comparison table - custom component for vs. competitor section
  - Contact CTA block - custom full-width colored section with form/contact options

- **States**: 
  - Buttons: Default (solid primary), Hover (darkened with subtle scale), Active (pressed effect), Focus (ring outline)
  - Cards: Default (subtle shadow), Hover (elevated shadow + slight scale up), Focus (ring on keyboard nav)
  - Links: Default (accent color), Hover (underline), Visited (same styling)

- **Icon Selection**: 
  - Shield for security features
  - Lightning for automation/speed
  - Target for vulnerability detection
  - Gear for patch management
  - Clock for time savings
  - CheckCircle for compliance/success
  - TrendUp for improvement metrics
  - Users for collaboration features

- **Spacing**: 
  - Section padding: py-16 md:py-24
  - Container max-width: max-w-7xl mx-auto px-6
  - Grid gaps: gap-8 md:gap-12
  - Card padding: p-6
  - Button padding: px-6 py-3

- **Mobile**: 
  - Hero text reduces from 48px to 32px
  - 3-column grid becomes 1-column on mobile
  - Horizontal spacing reduces from px-6 to px-4
  - Section padding reduces from py-24 to py-12
  - CTA buttons become full-width on mobile
  - Navigation (if present) collapses to hamburger menu
