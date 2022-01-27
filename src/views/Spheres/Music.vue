<template>
  <div class="music-page">
    <div class="header">
      Добро пожаловать на страничку результатов Музыкального Марафона
    </div>

    <div class="container">
      <div class="user-1">
        <div class="name">Lida</div>

        <div class="music" v-if="switchSong">
          <div class="music-group" v-for="group in user1Data" :key="group.id">
            <div class="music-song" v-for="song in group" :key="song.id" :style="song.status ? 'backgroundColor: rgba(139, 241, 56, 0.35)' : 'backgroundColor: rgba(245, 65, 107, 0.6)'">
              {{ song.name }}
            </div>
          </div>
        </div>
      </div>

      <div class="user-2">
        <div class="name">Denys</div>

        <div class="music" v-if="switchSong">
          <div class="music-group" v-for="group in user2Data" :key="group.id">
            <div class="music-song" v-for="song in group" :key="song.id" :style="song.status ? 'backgroundColor: rgba(139, 241, 56, 0.35)' : 'backgroundColor: rgba(245, 65, 107, 0.6)'">
              {{ song.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  data () {
    return {
      user1Data: [
        [
          {
            name: 'Oh my God - Adele',
            place: 1,
            id: 0,
            status: false
          },
          {
            name: 'We dont talk about Bruno - Encanto',
            place: 2,
            id: 1
          },
          {
            name: 'Shivers - Ed Sheeran',
            place: 3,
            id: 2
          }
        ],
        [
          {
            name: 'ZAZ - Je veux',
            place: 1,
            id: 3
          },
          {
            name: 'ILIRA x VIZE - Dynamite',
            place: 2,
            id: 4
          },
          {
            name: 'LOUNA - Poles / ACOUSTIC / LIVE / 2019',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Falling like the stars - James Arthur',
            place: 1,
            id: 6
          },
          {
            name: 'Burn the house down - AJR',
            place: 2,
            id: 4
          },
          {
            name: 'Family affair - Mary J. Blige',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Imposible -James Arthur',
            place: 1,
            id: 3
          },
          {
            name: 'Another One Bites the Dust - Queen',
            place: 2,
            id: 4
          },
          {
            name: 'We are not the angels (Fingerstyle guitar cover)',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'This city - Сэм Фишер',
            place: 1,
            id: 3
          },
          {
            name: 'Interstellar - main theme',
            place: 2,
            id: 4
          },
          {
            name: 'A whole new world - Риджайна Бель',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Sweater Weather - The Neighbourhood',
            place: 1,
            id: 3
          },
          {
            name: 'two moons - BoyWithUke',
            place: 2,
            id: 4
          },
          {
            name: 'idfc- blackbear',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Left for dead - Kiki Rockelwell',
            place: 1,
            id: 3
          },
          {
            name: 'The song of the white wolf - соня белоусова',
            place: 2,
            id: 4
          },
          {
            name: 'Земфира - в метро',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Lil Nas X - Montero',
            place: 1,
            id: 3
          },
          {
            name: 'Charlie Christian - As long as I Live',
            place: 2,
            id: 4
          },
          {
            name: 'Jon Parsi - Night Shift',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'All for us - Labrinth and Zendaya',
            place: 1,
            id: 3
          },
          {
            name: 'Smoke out the window - Bruno Mars',
            place: 2,
            id: 4
          },
          {
            name: 'Where we are - The Lumineers',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Човен - Один в Каное',
            place: 1,
            id: 3
          },
          {
            name: 'Its OK - Imagine Dragons',
            place: 2,
            id: 4
          },
          {
            name: 'Павел Пламенев Сокрушить Великих (Перезалив)',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Burn Butcher Burn - Joseph Trapanese',
            place: 1,
            id: 3
          },
          {
            name: 'All that matters (acoustic) - Tom',
            place: 2,
            id: 4
          },
          {
            name: 'Lady Marmalade - Christina Aguilera, Lil Kim',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Fingers Crossed - Lauren Spencer-Smith',
            place: 1,
            id: 3
          },
          {
            name: 'Пташечка - Vivienne Mort',
            place: 2,
            id: 4
          },
          {
            name: 'Ateo - C. Tangana & Nathy Peluso',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'How villains are made - madalen duke',
            place: 1,
            id: 3
          },
          {
            name: 'Colors - Black Pumas',
            place: 2,
            id: 4
          },
          {
            name: 'The phantom of the opera: overture - prague cello quartet',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Enemy - Imagine Dragons, JID',
            place: 1,
            id: 3
          },
          {
            name: 'INFERNO - Bella Poarch',
            place: 2,
            id: 4
          },
          {
            name: 'Trampoline (Jauz Remix) - Single - Shaed',
            place: 3,
            id: 5
          }
        ]

      ],
      user2Data: [
        [
          {
            name: 'We dont talk about Bruno - Encanto',
            place: 1,
            id: 1
          },
          {
            name: 'Shivers - Ed Sheeran',
            place: 2,
            id: 2
          },
          {
            name: 'Oh my God - Adele',
            place: 3,
            id: 0
          }
        ],
        [
          {
            name: 'ILIRA x VIZE - Dynamite',
            place: 1,
            id: 4
          },
          {
            name: 'LOUNA - Poles / ACOUSTIC / LIVE / 2019',
            place: 2,
            id: 5
          },
          {
            name: 'ZAZ - Je veux',
            place: 3,
            id: 3
          }
        ],
        [
          {
            name: 'Family affair - Mary J. Blige',
            place: 1,
            id: 5
          },
          {
            name: 'Burn the house down - AJR',
            place: 2,
            id: 4
          },
          {
            name: 'Falling like the stars - James Arthur',
            place: 3,
            id: 6
          }
        ],
        [
          {
            name: 'We are not the angels (Fingerstyle guitar cover)',
            place: 1,
            id: 5
          },
          {
            name: 'Imposible -James Arthur',
            place: 2,
            id: 3
          },
          {
            name: 'Another One Bites the Dust - Queen',
            place: 3,
            id: 4
          }
        ],
        [
          {
            name: 'Interstellar - main theme',
            place: 1,
            id: 4
          },
          {
            name: 'This city - Сэм Фишер',
            place: 2,
            id: 3
          },
          {
            name: 'A whole new world - Риджайна Бель',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'two moons - BoyWithUke',
            place: 1,
            id: 4
          },
          {
            name: 'idfc- blackbear',
            place: 2,
            id: 5
          },
          {
            name: 'Sweater Weather - The Neighbourhood',
            place: 3,
            id: 3
          }
        ],
        [
          {
            name: 'Left for dead - Kiki Rockelwell',
            place: 1,
            id: 3
          },
          {
            name: 'The song of the white wolf - соня белоусова',
            place: 2,
            id: 4
          },
          {
            name: 'Земфира - в метро',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Lil Nas X - Montero',
            place: 1,
            id: 3
          },
          {
            name: 'Charlie Christian - As long as I Live',
            place: 2,
            id: 4
          },
          {
            name: 'Jon Parsi - Night Shift',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Smoke out the window - Bruno Mars',
            place: 2,
            id: 4
          },
          {
            name: 'Where we are - The Lumineers',
            place: 1,
            id: 5
          },
          {
            name: 'All for us - Labrinth and Zendaya',
            place: 3,
            id: 3
          }
        ],
        [
          {
            name: 'Човен - Один в Каное',
            place: 1,
            id: 3
          },
          {
            name: 'Its OK - Imagine Dragons',
            place: 2,
            id: 4
          },
          {
            name: 'Павел Пламенев Сокрушить Великих (Перезалив)',
            place: 3,
            id: 5
          }
        ],
        [
          {
            name: 'Lady Marmalade - Christina Aguilera, Lil Kim',
            place: 1,
            id: 5
          },
          {
            name: 'Burn Butcher Burn - Joseph Trapanese',
            place: 2,
            id: 3
          },
          {
            name: 'All that matters (acoustic) - Tom',
            place: 3,
            id: 4
          }
        ],
        [
          {
            name: 'Ateo - C. Tangana & Nathy Peluso',
            place: 1,
            id: 5
          },
          {
            name: 'Fingers Crossed - Lauren Spencer-Smith',
            place: 2,
            id: 3
          },
          {
            name: 'Пташечка - Vivienne Mort',
            place: 3,
            id: 4
          }
        ],
        [
          {
            name: 'The phantom of the opera: overture - prague cello quartet',
            place: 1,
            id: 5
          },
          {
            name: 'Colors - Black Pumas',
            place: 2,
            id: 4
          },
          {
            name: 'How villains are made - madalen duke',
            place: 3,
            id: 3
          }
        ],
        [
          {
            name: 'Enemy - Imagine Dragons, JID',
            place: 1,
            id: 3
          },
          {
            name: 'INFERNO - Bella Poarch',
            place: 2,
            id: 4
          },
          {
            name: 'Trampoline (Jauz Remix) - Single - Shaed',
            place: 3,
            id: 5
          }
        ]
      ],
      switchSong: false
    }
  },
  mounted () {
    this.checkSimilarSong()
    console.log(this.user1Data)
    this.switchSong = true
  },
  methods: {
    checkSimilarSong () {
      for (let i = 0; i < this.user1Data.length; i++) {
        for (let j = 0; j < this.user1Data[i].length; j++) {
          console.log(this.user1Data[i][j].name + ' === ' + this.user2Data[i][j].name)
          if (this.user1Data[i][j].name === this.user2Data[i][j].name) {
            this.user1Data[i][j].status = true
            this.user2Data[i][j].status = true
          } else {
            this.user1Data[i][j].status = false
            this.user2Data[i][j].status = false
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.music-page {
  background: url('../../../src/assets/img/space.jpeg');
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.header {
  color: white;
  font-size: 56px;
  display: flex;
  justify-content: center;
  padding: 40px;
  text-align: center;
  font-family: Snell Roundhand, cursive;
  font-weight: bold;
}

.music-group {
  background-color: rgba(31, 147, 241, 0.4);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
}

.music-song {
  background-color: rgba(65, 245, 245, 0.9);
  /*background-color: rgba(139, 241, 56, 0.35);*/
  margin: 20px;
  padding: 16px;
  border-radius: 20px;
  font-size: 18px;
}

.name {
  color: white;
  text-align: center;
  font-size: 24px;
}

</style>
