import { Deck, Markdown } from '@revealjs/react';
import { SlideLayout, SplitSlide } from './components/SlideLayout';
import 'reveal.js/reveal.css';
import './theme-tokens.css';
import './theme.css';

// Slide content imports
import { html as titleContent } from './slides/00-title.md';
import { html as modelsContent } from './slides/01-models.md';
import { html as harnessesContent } from './slides/02-harnesses.md';
import { html as integrationsContent } from './slides/03-integrations.md';
import { html as infrastructureContent } from './slides/04-infrastructure.md';
import { html as workflowsContent } from './slides/05-workflows.md';
import { html as closingContent } from './slides/06-closing.md';

// Graphics
import AiEnginesGraphic from './assets/ai-engines.svg';

const deckConfig = {
  width: 1280,
  height: 720,
  hash: true,
  controls: true,
  progress: true,
  center: false,
  transition: 'slide' as const,
  transitionSpeed: 'default' as const,
  backgroundTransition: 'fade' as const,
};

export default function Presentation() {
  return (
    <Deck config={deckConfig}>
      {/* Slide 0: Title — dark teal, centered */}
      <SlideLayout background="#056251">
        <Markdown>{titleContent}</Markdown>
      </SlideLayout>

      {/* Slide 1: AI/LLMs — split layout with engine graphic */}
      <SplitSlide graphic={<img src={AiEnginesGraphic} alt="AI Engines" />} graphicPosition="left">
        <Markdown>{modelsContent}</Markdown>
      </SplitSlide>

      {/* Slide 2: AI Harnesses */}
      <SplitSlide graphic={null} graphicPosition="right">
        <Markdown>{harnessesContent}</Markdown>
      </SplitSlide>

      {/* Slide 3: Integrations */}
      <SplitSlide graphic={null} graphicPosition="left">
        <Markdown>{integrationsContent}</Markdown>
      </SplitSlide>

      {/* Slide 4: Infrastructure */}
      <SplitSlide graphic={null} graphicPosition="right">
        <Markdown>{infrastructureContent}</Markdown>
      </SplitSlide>

      {/* Slide 5: Workflows */}
      <SplitSlide graphic={null} graphicPosition="left">
        <Markdown>{workflowsContent}</Markdown>
      </SplitSlide>

      {/* Slide 6: Closing — centered */}
      <SlideLayout background="#056251">
        <Markdown>{closingContent}</Markdown>
      </SlideLayout>
    </Deck>
  );
}
