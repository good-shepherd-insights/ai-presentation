declare module '*.md' {
  const html: string;
  export { html };
  const markdown: string;
  export { markdown };
  const attributes: Record<string, unknown>;
  export { attributes };
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module 'reveal.js/reveal.css' {
  const css: string;
  export default css;
}

declare module 'reveal.js/dist/reveal.css' {
  const css: string;
  export default css;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
