export type ProgressDonutConfig = {
  trailColor: string;
  strokeWidth: number;
  trailWidth: number;
  easing: string;
  duration: number;
  animate: boolean;
  value: number;
  onStep?: (value: number) => void;
};

type ProgressbarCircle = {
  animate(progress: number): void;
  set(progress: number): void;
  value(): number;
  setText(text: string): void;
  destroy(): void;
};

type ProgressbarCircleOptions = {
  color?: string;
  trailColor?: string;
  strokeWidth?: number;
  trailWidth?: number;
  easing?: string;
  duration?: number;
  text?: {
    autoStyleContainer?: boolean;
    [key: string]: unknown;
  };
  step?: (state: unknown, bar: ProgressbarCircle) => void;
};

type ProgressbarCircleConstructor = new (element: HTMLElement, options: ProgressbarCircleOptions) => ProgressbarCircle;

export class ProgressDonut {
  private readonly _bar: ProgressbarCircle;

  private constructor(bar: ProgressbarCircle) {
    this._bar = bar;
  }

  static async create(container: HTMLElement, config: ProgressDonutConfig) {
    const CircleConstructor = await this._loadCircleConstructor();

    // `color` is intentionally not set: the progress stroke is colored via CSS
    // (--it-progress-donut-color) so that design tokens can be resolved.
    const bar = new CircleConstructor(container, {
      trailColor: config.trailColor,
      strokeWidth: config.strokeWidth,
      trailWidth: config.trailWidth,
      easing: config.easing,
      duration: config.duration,
      text: {
        autoStyleContainer: false,
      },
      step: (_state, circle) => {
        const value = Math.round(circle.value() * 100);
        circle.setText(`${value}%`);
        config.onStep?.(value);
      },
    });

    const instance = new ProgressDonut(bar);
    instance.setValue(config.value, config.animate);
    return instance;
  }

  setValue(value: number, animate = true) {
    if (animate) {
      this._bar.animate(value);
      return;
    }

    this._bar.set(value);
  }

  destroy() {
    this._bar.destroy();
  }

  private static async _loadCircleConstructor(): Promise<ProgressbarCircleConstructor> {
    try {
      const mod = await import('progressbar.js/src/circle.js');
      return mod.default ?? mod;
    } catch {
      const mod = await import('progressbar.js');
      return (mod.default ?? mod).Circle;
    }
  }
}
