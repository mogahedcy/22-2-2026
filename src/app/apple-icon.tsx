import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a2540',
          borderRadius: '20%',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Shade / Umbrella Design (White for contrast) */}
          <path
            d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 2V28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
           <path
            d="M6 28H26"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
