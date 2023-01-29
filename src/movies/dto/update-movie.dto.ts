import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDTO } from "./create-movie.dto";

export class UpdateMovieDTO extends PartialType(CreateMovieDTO){}


// ?은 필수사항이 아니라는거~