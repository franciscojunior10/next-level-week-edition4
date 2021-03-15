export interface ChallengeProps {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface ChallengeContextProps {
  level: number;

  currentExperience: number;

  challengesCompleted: number;

  activeChallenge: ChallengeProps;

  experienceToNextLevel: number;

  startNewChallenge: () => void;

  levelUp: () => void;

  resetChallenge: () => void;

  completeChallenge: () => void;

  closeLevelUpModal: () => void;
}

export interface ChallengesProviderProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
