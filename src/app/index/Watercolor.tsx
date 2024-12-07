import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { type Watercolor, fetchWatercolors, postWatercolor } from "./lib/api";

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  aspect-ratio: 5/2;
  margin-bottom: 16px;
  filter: blur(4px);
`;

const Colors = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Color = styled.div<{ h: number; selected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => `hsla(${props.h}, 80%, 60%, 0.8)`};
  box-shadow: ${({ selected }) => (selected ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none")};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }
`;

const Description = styled.p`
  color: #999;
  text-align: center;
`;

const drawSmoothIrregularCircle = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  irregularity: number,
  points: number,
) => {
  const controlPoints = [];
  const step = (Math.PI * 2) / points;

  for (let i = 0; i < points; i++) {
    const angle = step * i;
    const r = radius + (Math.random() - 0.5) * irregularity;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    controlPoints.push({ x: px, y: py });
  }

  controlPoints.push(controlPoints[0], controlPoints[1]);

  context.beginPath();
  context.moveTo(controlPoints[0].x, controlPoints[0].y);
  for (let i = 1; i < controlPoints.length - 1; i++) {
    const cp1 = controlPoints[i];
    const cp2 = controlPoints[i + 1];
    const midX = (cp1.x + cp2.x) / 2;
    const midY = (cp1.y + cp2.y) / 2;
    context.quadraticCurveTo(cp1.x, cp1.y, midX, midY);
  }
  context.closePath();
  context.fill();
};

const width = 500 * 2;
const height = (width / 5) * 2;

const WatercolorComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedHue, setSelectedHue] = useState(0);

  const draw = useCallback((watercolors: Watercolor[]) => {
    if (!canvasRef.current) {
      return;
    }
    const context = canvasRef.current.getContext("2d");
    if (!context) {
      return;
    }
    for (const { x_ratio, y_ratio, h } of watercolors) {
      context.fillStyle = `hsla(${h}, 80%, 60%, 0.03)`;
      for (let i = 0; i < 20; i++) {
        drawSmoothIrregularCircle(
          context,
          x_ratio * width,
          y_ratio * height,
          20 + 8 * i,
          20,
          16,
        );
      }
    }
  }, []);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (!canvasRef.current) {
        return;
      }
      const rect = canvasRef.current.getBoundingClientRect();
      const xRatio = (e.pageX - rect.left) / rect.width;
      const yRatio = (e.pageY - rect.top) / rect.height;
      draw([{ x_ratio: xRatio, y_ratio: yRatio, h: selectedHue }]);
      postWatercolor({ x_ratio: xRatio, y_ratio: yRatio, h: selectedHue });
    },
    [selectedHue, draw],
  );

  useEffect(() => {
    (async () => {
      const result = await fetchWatercolors();
      if (result.success) {
        draw(result.value);
      }
    })();
  }, [draw]);

  return (
    <div>
      <Canvas width={width} height={height} ref={canvasRef} onClick={onClick} />
      <Colors>
        {[...Array(12)].map((_, i) => {
          const h = Math.floor((360 / 12) * i);
          return (
            <Color
              h={Math.floor(h)}
              selected={selectedHue === h}
              key={i}
              onClick={() => setSelectedHue(h)}
            />
          );
        })}
      </Colors>
      <Description>色を選択してキャンバスをクリックします</Description>
    </div>
  );
};

export default WatercolorComponent;
