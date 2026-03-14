export interface Step3ExperienceProps {
  photoFile: File | null;
  photoFileName: string;
  agreed: boolean;
  onPhotoChange: (file: File | null, fileName: string) => void;
  onAgreedChange: (agreed: boolean) => void;
}

export interface Step3ExperienceRef {
  validate: () => boolean;
}