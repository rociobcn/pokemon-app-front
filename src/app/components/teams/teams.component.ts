import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { TeamsService } from 'src/app/services/teams.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  searchName: string
  pokeNameList: string[];
  pokeObj: Pokemon;

  constructor(private teamsService: TeamsService) { 

    this.searchName = '';
    this.pokeNameList = [];
    this.pokeObj = new Pokemon(0,'','',0,0,0,0,0,0,0,0,0,0);

  }

  ngOnInit(): void {
    this.getPokeNameList();
  }

  

  getPokeNameList() {
    this.teamsService.getAllPokeObj().subscribe(
      response => {
      for (const poke of response.results) {
         this.pokeNameList.push(poke.name);
      }
      console.log('this.pokeNameList', this.pokeNameList)
    })
  }
  
  searchPoke(searchName: string) {

    this.teamsService.getPokeObj(searchName).subscribe(
      response => {
      const { id, name, base_experience, weight, height, held_items } = response;

      const hp  = response.stats[0].base_stat;
      const attack = response.stats[1].base_stat;
      const defence= response.stats[2].base_stat;
      const spAttack = response.stats[3].base_stat;
      const spDefence= response.stats[4].base_stat;
      const speed  = response.stats[5].base_stat;
      const image  = response.sprites.other.dream_world.front_default;
      
      return new Pokemon( id, name, image, hp, attack, defence, spAttack, 
        spDefence, speed,  base_experience, weight, height, held_items.length)
    })
  }

}
