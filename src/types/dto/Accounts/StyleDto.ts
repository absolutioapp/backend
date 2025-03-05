import { Style } from "@prisma/client";

export class StyleDto {
  id: number;
  name: string;    

  constructor(style: Style) {
    this.id = style.id;
    this.name = style.name ?? 'Unknown';
  }
}