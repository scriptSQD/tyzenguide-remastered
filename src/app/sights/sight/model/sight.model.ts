import { Images } from "./images.model";
import { Prose } from "./prose.model";
import { Source } from "./source.model";

export class Sight {
    name!: string;
    youtube!: string;
    images!: Images;
    title!: string;
    prose!: Prose;
    sources!: Source;
}
