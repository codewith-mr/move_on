
const fs = require('fs');
const path = require('path');

const PRIMARY = '#01513a';
const SECONDARY = '#c6e3b5';
const ACCENT = '#003024';
const BACKGROUND = '#f8f9fa';
const WHITE = '#ffffff';

const WIDTH = 800;
const HEIGHT = 450;

const createSvg = (content, width = WIDTH, height = HEIGHT) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${BACKGROUND}" />
  ${content}
</svg>
`;

// Helper shapes
const rect = (x, y, w, h, fill = PRIMARY) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" rx="4" />`;
const circle = (cx, cy, r, fill = PRIMARY) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />`;
const text = (x, y, str, size = 40, fill = PRIMARY) => `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" fill="${fill}" text-anchor="middle" font-weight="bold">${str}</text>`;
const pathShape = (d, fill = PRIMARY) => `<path d="${d}" fill="${fill}" />`;

const assets = [
  {
    name: 'course-ai.svg',
    content: `
      <!-- Brain/AI Circuit -->
      ${circle(400, 225, 120, SECONDARY)}
      ${pathShape('M400 135 L400 315 M310 225 L490 225 M335 160 L465 290 M465 160 L335 290', ACCENT + '33')}
      ${circle(400, 135, 15, PRIMARY)} ${circle(400, 315, 15, PRIMARY)}
      ${circle(310, 225, 15, PRIMARY)} ${circle(490, 225, 15, PRIMARY)}
      ${circle(335, 160, 15, PRIMARY)} ${circle(465, 290, 15, PRIMARY)}
      ${circle(465, 160, 15, PRIMARY)} ${circle(335, 290, 15, PRIMARY)}
      ${circle(400, 225, 40, PRIMARY)}
      ${text(400, 400, 'AI & Machine Learning')}
    `
  },
  {
    name: 'course-trading.svg',
    content: `
      <!-- Candlestick Chart -->
      ${rect(100, 50, 600, 300, WHITE)}
      ${rect(150, 200, 40, 100, '#ef4444')} <!-- Red Candle -->
      ${rect(168, 150, 4, 200, '#ef4444')}
      
      ${rect(250, 150, 40, 120, '#22c55e')} <!-- Green Candle -->
      ${rect(268, 100, 4, 220, '#22c55e')}
      
      ${rect(350, 180, 40, 60, '#ef4444')} <!-- Red Candle -->
      ${rect(368, 160, 4, 100, '#ef4444')}
      
      ${rect(450, 120, 40, 150, '#22c55e')} <!-- Green Candle -->
      ${rect(468, 80, 4, 220, '#22c55e')}
      
      ${rect(550, 100, 40, 80, '#22c55e')} <!-- Green Candle -->
      ${rect(568, 60, 4, 160, '#22c55e')}

      ${text(400, 400, 'Trading & Finance')}
    `
  },
  {
    name: 'course-marketing.svg',
    content: `
      <!-- Megaphone/Graph -->
      ${pathShape('M200 225 L350 150 L350 300 Z', PRIMARY)}
      ${rect(350, 200, 100, 50, PRIMARY)}
      ${pathShape('M480 180 Q550 180 550 250', 'none" stroke="' + PRIMARY + '" stroke-width="20" stroke-linecap="round')}
      ${pathShape('M500 150 Q600 150 600 250', 'none" stroke="' + PRIMARY + '" stroke-width="20" stroke-linecap="round')}
      ${pathShape('M520 120 Q650 120 650 250', 'none" stroke="' + PRIMARY + '" stroke-width="20" stroke-linecap="round')}
      ${text(400, 400, 'Digital Marketing')}
    `
  },
  {
    name: 'course-freelancing.svg',
    content: `
      <!-- Laptop -->
      ${rect(200, 100, 400, 240, '#333')} <!-- Screen Bezel -->
      ${rect(220, 120, 360, 200, WHITE)} <!-- Screen -->
      ${rect(240, 140, 100, 80, SECONDARY)} <!-- Window -->
      ${rect(150, 340, 500, 20, '#555')} <!-- Base -->
      ${pathShape('M150 340 L200 360 L600 360 L650 340 Z', '#444')}
      ${text(400, 410, 'Freelancing')}
    `
  },
  {
    name: 'course-investing.svg',
    content: `
      <!-- Growing Plant/Coins -->
      ${circle(400, 250, 80, '#eab308')} <!-- Coin -->
      ${text(400, 275, '$', 80, '#b45309')}
      ${circle(280, 280, 60, '#eab308')} <!-- Coin -->
      ${circle(520, 280, 60, '#eab308')} <!-- Coin -->
      
      <!-- Arrow Up -->
      ${pathShape('M350 150 L400 80 L450 150 L420 150 L420 200 L380 200 L380 150 Z', '#22c55e')}
      ${text(400, 400, 'Investing')}
    `
  },
  {
    name: 'course-content-creation.svg',
    content: `
      <!-- Play Button / Camera -->
      ${rect(250, 125, 300, 200, PRIMARY)}
      ${pathShape('M380 175 L460 225 L380 275 Z', WHITE)}
      ${pathShape('M250 125 L300 80 L500 80 L550 125 Z', ACCENT)}
      ${circle(500, 100, 10, WHITE)}
      ${text(400, 400, 'Content Creation')}
    `
  },
  {
    name: 'web.svg',
    content: `
      <!-- Code / Web -->
      ${rect(150, 100, 500, 300, PRIMARY)}
      ${rect(150, 100, 500, 40, ACCENT)}
      ${circle(180, 120, 8, '#ff5f56')}
      ${circle(210, 120, 8, '#ffbd2e')}
      ${circle(240, 120, 8, '#27c93f')}
      ${text(400, 250, '</> CODE', 80, WHITE)}
      ${text(400, 430, 'Web Development')}
    `
  },
  {
    name: 'placeholder-course.svg',
    content: `
      <!-- Generic Course -->
      ${rect(200, 150, 400, 200, PRIMARY)}
      ${pathShape('M150 150 L400 50 L650 150 L400 250 Z', ACCENT)} <!-- Cap Top -->
      ${rect(390, 50, 20, 20, SECONDARY)}
      ${text(400, 400, 'Course Placeholder')}
    `
  },
  {
    name: 'placeholder-tool.svg',
    content: `
      <!-- Tool/Wrench -->
      ${pathShape('M300 300 L500 100', 'none" stroke="' + PRIMARY + '" stroke-width="40" stroke-linecap="round')}
      ${circle(280, 320, 40, PRIMARY)}
      ${circle(520, 80, 40, PRIMARY)}
      ${text(400, 420, 'Tool')}
    `
  },
  {
    name: 'user-avatar.svg',
    width: 200,
    height: 200,
    content: `
      <rect width="200" height="200" fill="${BACKGROUND}" />
      ${circle(100, 100, 100, '#e5e7eb')}
      ${circle(100, 80, 40, '#9ca3af')}
      ${pathShape('M40 180 Q100 220 160 180 Q160 140 100 140 Q40 140 40 180', '#9ca3af')}
    `
  },
  {
    name: 'tagline.svg',
    width: 400,
    height: 100,
    content: `
      <rect width="400" height="100" fill="transparent" />
      <text x="200" y="60" font-family="Arial, sans-serif" font-size="28" fill="${WHITE}" text-anchor="middle" font-weight="bold">The Binary Strategy</text>
    `
  },
  {
    name: 'tool-image.svg',
    content: `
       ${rect(200, 150, 400, 200, PRIMARY)}
       ${text(400, 260, 'CALCULATOR', 50, WHITE)}
    `
  }
];

const publicDir = path.join(__dirname, 'public');

assets.forEach(asset => {
  const filePath = path.join(publicDir, asset.name);
  const svgContent = createSvg(asset.content, asset.width || WIDTH, asset.height || HEIGHT);
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Generated ${asset.name}`);
});
