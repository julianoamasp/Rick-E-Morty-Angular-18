import { PersonagemOrigemModel } from "./PersonagemOrigemModel";

export class PersonagemModel {
    id: number;
    gender: string;
    image: string;
    name: string;
    origin: PersonagemOrigemModel;
    constructor(id: number,
        gender: string,
        image: string,
        name: string,
        origin : PersonagemOrigemModel) {
        this.id = id;
        this.gender = gender;
        this.image = image;
        this.name = name;
        this.origin = origin;
    }
}