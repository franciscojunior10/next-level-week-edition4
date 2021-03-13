export interface CountDownContextProps {
  isActive: boolean;

  hasFinished: boolean;

  minutes: number;

  seconds: number;

  startCountDown(): void;

  resetCountDown(): void;
}
