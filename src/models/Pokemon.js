export default class Pokemon{
    #number
    #name
    #types
    #stats
    #gen
    #legendary

    constructor(stats){
        this.#number=stats[0]
        this.#name=stats[1]
        this.#types=[stats[2],stats[3]]
        this.#stats=stats.slice(4,11)
        this.#gen=stats[11]
        this.#legendary=stats[12]
    }

    get number(){
        return this.#number
    }

    get name(){
        function camelCaseSplit(str){
            return [...new Set(
                str.split(/(?=[A-Z])/).map(e=>e.replace(/(\ |Forme)/g,''))
            )].join(' ')
        }


        return camelCaseSplit(this.#name)
    }

    get image(){
        let name = this.name.toLowerCase().replace(/\ /g,'-')

        //Exceptions
        if (name.match(/(wormadam)/)){
            name = name.split(/-/g).slice(0,-1).join('-')
        }

        return name+'.jpg'
    }

    get pokedex_data(){
        return {
            labels: ['Number','Type','Generation','Legendary'],
            en_labels:['Nº','Type','Generation','Legendary'],
            pt_labels:['Nº','Tipo','Geração','Lendário'],
            content:[this.#number,this.#types,this.#gen,this.#legendary]
        }
    }

    get base_stats(){
        return {
            labels: ['HP','Atk','Def','SpAtk','SpDef','Speed','Total'],
            en_labels:['HP','Attack','Defence','Sp. Atk', 'Sp. Def', 'Speed','Total'],
            pt_labels:['HP','Ataque','Defesa','Sp. Atk', 'Sp. Def', 'Velocidade','Total'],
            content:this.#stats
        }
    }
    
}