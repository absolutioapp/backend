import { Emotion } from "@prisma/client";

export class EmotionDto {
  id: number;
  name: string; 
  keyWords:string[]   

  constructor(emotion: Emotion) {
    this.id = emotion.id;
    this.name = emotion.name ?? 'Unknown';
    this.keyWords = emotion.keyWords ?? ['Unknown']
  }
}