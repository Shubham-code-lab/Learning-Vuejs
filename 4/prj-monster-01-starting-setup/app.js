const randomNumberGenerator = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundCounter: 0,
            winner: null,
            battleLogs: []
        };
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: 0 + '%' }
            }
            return {
                width: this.monsterHealth + "%"
            }
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return { width: 0 + '%' }
            }
            return {
                width: this.playerHealth + '%'
            }
        },
    },
    watch: {
        monsterHealth(newValue, oldValue) {
            if (newValue <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw!';
            } else if (newValue <= 0) {
                this.winner = 'player';
            }
        },
        playerHealth(newValue, oldValue) {
            if (newValue <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw!';
            } else if (newValue <= 0) {
                this.winner = 'monster';
            } else if (newValue > 100)
                this.playerHealth = 100;
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.roundCounter = 0;
            this.winner = null;
            this.battleLogs = [];
        },
        addBattleLogs(who, action, amount) {
            this.battleLogs.unshift({
                actionBy: who,
                actionType: action,
                actionAmount: amount
            });
        },
        attackMonster() {
            this.roundCounter++;
            const damage = randomNumberGenerator(5, 12);
            this.monsterHealth -= damage;
            this.addBattleLogs("Player", "attack", damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = randomNumberGenerator(8, 20);
            this.playerHealth -= damage;
            this.addBattleLogs("Monster", "attack", damage);
        },
        healPlayer() {
            this.roundCounter++;
            const heal = randomNumberGenerator(10, 20);
            this.playerHealth += heal;
            this.addBattleLogs("PLayer", "heal", heal);
            this.attackPlayer();
        },
        specialAttack() {
            this.roundCounter++;
            const damage = randomNumberGenerator(10, 25);
            this.addBattleLogs("Player", "attack", damage);
            this.monsterHealth -= damage;
        },
        surrender() {
            this.winner = 'monster';
        }
    }
});

app.mount('#game');