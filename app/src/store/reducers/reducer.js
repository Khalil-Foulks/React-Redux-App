import { FETCH_TEAMS_START, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from '../actions/actions'

const initialState = {
    isLoading: false,
    teams: [],
    error: "",
    teamsIcon: [
        {
            teamFullName:"Atlanta Hawks",
            iconURL:'https://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png'
        },
        {
            teamFullName:'Boston Celtics',
            iconURL:'https://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png'
        },
        {
            teamFullName:'Brooklyn Nets',
            iconURL:'https://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png'
        },
        {
            teamFullName:'Charlotte Hornets',
            iconURL: 'https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png'
        },
        {
            teamFullName:'Chicago Bulls',
            iconURL:'https://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png'
        },
        {
            teamFullName:'Cleveland Cavaliers',
            iconURL:'https://content.sportslogos.net/logos/6/222/full/6921_cleveland_cavaliers-primary-2018.png'
        },
        {
            teamFullName:'Dallas Mavericks',
            iconURL:'https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png'
        },
        {
            teamFullName: 'Denver Nuggets',
            iconURL:'https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png'
        },
        {
            teamFullName:'Detroit Pistons',
            iconURL:'https://content.sportslogos.net/logos/6/223/full/2164_detroit_pistons-primary-2018.png'
        },
        {
            teamFullName:'Golden State Warriors',
            iconURL:'https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png'
        },
        {
            teamFullName: 'Houston Rockets',
            iconURL:'https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png'
        },
        {
            teamFullName: "Indiana Pacers",
            iconURL:'https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png'
        },
        {
            teamFullName: "LA Clippers",
            iconURL:'https://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png'
        },
        {
            teamFullName: "Los Angeles Lakers",
            iconURL:'https://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png'
        },
        {
            teamFullName:'Memphis Grizzlies',
            iconURL:'https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png'
        },
        {
            teamFullName:'Miami Heat',
            iconURL:'https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif'
        },
        {
            teamFullName:'Milwaukee Bucks',
            iconURL:'https://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png'
        },
        {
            teamFullName:'Minnesota Timberwolves',
            iconURL:'https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png'
        },
        {
            teamFullName:'New Orleans Pelicans',
            iconURL:'https://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png'
        },
        {
            teamFullName:'New York Knicks',
            iconURL:'https://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif'
        },
        {
            teamFullName:'Oklahoma City Thunder',
            iconURL:'https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png'
        },
        {
            teamFullName:'Orlando Magic',
            iconURL:'https://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif'
        },
        {
            teamFullName:'Philadelphia 76ers',
            iconURL:'https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png'
        },
        {
            teamFullName:'Phoenix Suns',
            iconURL:'https://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png'
        },
        {
            teamFullName:'Portland Trail Blazers',
            iconURL:'https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png'
        },
        {
            teamFullName:'Sacramento Kings',
            iconURL:'https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png'
        },
        {
            teamFullName:'San Antonio Spurs',
            iconURL:'https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png'
        },
        {
            teamFullName:'Toronto Raptors',
            iconURL:'https://content.sportslogos.net/logos/6/227/full/4578_toronto_raptors-primary-2016.png'
        },
        {
            teamFullName:'Utah Jazz',
            iconURL:'https://content.sportslogos.net/logos/6/234/full/6749_utah_jazz-primary-2017.png'
        },
        {
            teamFullName:'Washington Wizards',
            iconURL:'https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png'
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_START:
            return{
                isLoading: true
            }
        case FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                teams: action.payload,
                error: '',
                
            };
        case FETCH_TEAMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};
  