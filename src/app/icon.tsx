import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
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
          background: 'transparent',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Shade / Umbrella Design */}
          <path
            d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16"
            stroke="#0a2540"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16 2V28"
            stroke="#0a2540"
            strokeWidth="3"
            strokeLinecap="round"
          />
           <path
            d="M6 28H26"
            stroke="#0a2540"
            strokeWidth="3"
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
