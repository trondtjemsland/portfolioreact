import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
    --font-body: Poppins, Arial, serif;
    --font-logo: 'Orelega One', Arial, serif;
  
    /* FONT SIZES */
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.068rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;
  
    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
    --size-huge: 121px;
    --size-jumbo: 182px;
  
    /* COLORS */
    --color-primary: #110B1C;
    --color-secondary: #2F2AA4;
    --color-tertiary: #403AD0;
    --color-quaternary: #dadada;
    --color-white: #F4F4FC;
    --color-black: #282828;
  
    --c-action: var(--color-secondary);
    --c-danger: rgb(190, 47, 47);
    --c-success: var(--color-primary);
    --c-info: var(--color-tertiary);
    --c-bg: var(--color-primary);
    --c-text: var(--color-black);
    --c-text--inverse: var(--color-white);
    --c-disabled: var(--color-quaternary);
  
    /* RADIUS */
    --radius-base: 6px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 10px;
  
    /* Animation speed */
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-medium: 200ms;
    --speed-slow: 500ms;
    --animate-duration: var(--speed-base);
    --animate-delay: var(--speed-fast);
  
    /* Z-index */
    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;
  



    ${media.greaterThan('huge')`
    --font-size-base: 18px;
    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 150px;
    `};
}
  
 
  
  html {
    background: var(--c-bg);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
    background-image: url('/images/blobs.png');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
  
  html,
  body {
    height: 100%;
    margin:0;
    padding:0;
  }

  body, #root, .App {
    margin:auto;
    height: 100%;
    > div {
      height: 100%;
    }
  }

  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1,h3,h2,p{
    color: var(--color-white);
    margin:0;
  }
  
  a {
    color: var(--c-action);
  }

	.headingText {
		font-size: var(--size-xl);
		font-weight: 700;
	}

	span {
		color: var(--color-primary);
		text-shadow: -1px -1px 0 #f4f4fc, 1px -1px 0 #f4f4fc, -1px 1px 0 #f4f4fc,
			1px 1px 0 #f4f4fc;
	}
`;
export default GlobalStyle;
