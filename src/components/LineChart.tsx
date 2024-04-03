import React, { useEffect, useRef } from 'react';

interface LineGraphProps {
  data: number[];
  width: number;
  height: number;
  color: string
}

const LineChart: React.FC<LineGraphProps> = ({ data, width, height, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Calculate maximum value in data
        const max = Math.max(...data);

        // Calculate pixel scale
        const xScale = (width - 50) / (data.length - 1);
        const yScale = (height - 20) / max;

        // Draw data points and lines
        ctx.beginPath();
        ctx.moveTo(50, height - 20 - data[0] * yScale);
        for (let i = 1; i < data.length; i++) {
          const x = 50 + i * xScale;
          const y = height - 20 - data[i] * yScale;
          ctx.lineTo(x, y);
          ctx.arc(x, y, 1, 0, Math.PI * 1);
          ctx.moveTo(x, y);
        }
        ctx.stroke();
        ctx.strokeStyle = color;
      }
    }
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default LineChart;
