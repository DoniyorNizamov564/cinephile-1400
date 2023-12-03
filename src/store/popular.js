import { defineStore } from 'pinia'
import { options } from "../static";
export const usePopular = defineStore('popular', {
    state: () => ({  
        moviesList: [],
        tvsList: [],
    }),
    actions: {
        async getPopular(type='movie', page=1){
            try {
                const result = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=ru&page=${page}`, options);
                const data = await result.json();
                // console.log(data);
                let array = data.results.filter((elem)=> elem.poster_path != null);
                if (type == 'movie') {
                    this.moviesList = array;
                } else {
                    this.tvsList = array;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
})