import React from 'react';
import { Slide } from '@revealjs/react';

interface SlideLayoutProps {
  children: React.ReactNode;
  background?: string;
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  centered?: boolean;
}

export function SlideLayout({
  children,
  background,
  transition = 'slide',
  centered = true,
}: SlideLayoutProps) {
  return (
    <Slide background={background} transition={transition}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: centered ? 'center' : 'flex-start',
          justifyContent: centered ? 'center' : 'flex-start',
          height: '100%',
          padding: 'var(--slide-padding)',
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          textAlign: centered ? 'center' : 'left',
          gap: 'var(--element-gap)',
        }}
      >
        {children}
      </div>
    </Slide>
  );
}

interface SplitSlideProps {
  children: React.ReactNode;
  graphic?: React.ReactNode;
  background?: string;
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  graphicPosition?: 'left' | 'right';
}

export function SplitSlide({
  children,
  graphic,
  background,
  transition = 'slide',
  graphicPosition = 'left',
}: SplitSlideProps) {
  return (
    <Slide background={background} transition={transition}>
      <div
        style={{
          display: 'flex',
          flexDirection: graphicPosition === 'left' ? 'row' : 'row-reverse',
          alignItems: 'center',
          height: '100%',
          padding: 'var(--slide-padding)',
          gap: 'var(--split-gap)',
        }}
      >
        {graphic && (
          <div
            style={{
              flex: '0 0 45%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            {graphic}
          </div>
        )}
        <div
          style={{
            flex: '1 1 55%',
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(var(--element-gap) * 0.5)',
          }}
        >
          {children}
        </div>
      </div>
    </Slide>
  );
}
