export const allLightConeKeys = [
  'ASecretVow',
  'Adversarial',
  'AfterTheCharmonyFall',
  'AlongThePassingShore',
  'Amber',
  'AnInstantBeforeAGaze',
  'Arrows',
  'BaptismOfPureThought',
  'BeforeDawn',
  'BeforeTheTutorialMissionStarts',
  'BoundlessChoreo',
  'BrighterThanTheSun',
  'ButTheBattleIsntOver',
  'CarveTheMoonWeaveTheClouds',
  'Chorus',
  'CollapsingSky',
  'ConcertForTwo',
  'Cornucopia',
  'CruisingInTheStellarSea',
  'DanceAtSunset',
  'DanceDanceDance',
  'DartingArrow',
  'DataBank',
  'DayOneOfMyNewLife',
  'Defense',
  'DestinysThreadsForewoven',
  'DreamvilleAdventure',
  'EarthlyEscapade',
  'EchoesOfTheCoffin',
  'EyesOfThePrey',
  'Fermata',
  'FinalVictor',
  'FineFruit',
  'FlamesAfar',
  'FlowingNightglow',
  'GeniusesRepose',
  'GoodNightAndSleepWell',
  'HeyOverHere',
  'HiddenShadow',
  'IShallBeMyOwnSword',
  'InTheNameOfTheWorld',
  'InTheNight',
  'IncessantRain',
  'IndeliblePromise',
  'InherentlyUnjustDestiny',
  'ItsShowtime',
  'LandausChoice',
  'Loop',
  'MakeTheWorldClamor',
  'Mediation',
  'MemoriesOfThePast',
  'MeshingCogs',
  'MomentOfVictory',
  'Multiplication',
  'MutualDemise',
  'NightOfFright',
  'NightOnTheMilkyWay',
  'NowhereToRun',
  'OnTheFallOfAnAeon',
  'OnlySilenceRemains',
  'Passkey',
  'PastAndFuture',
  'PastSelfInMirror',
  'PatienceIsAllYouNeed',
  'PerfectTiming',
  'Pioneering',
  'PlanetaryRendezvous',
  'PoisedToBloom',
  'PostOpConversation',
  'QuidProQuo',
  'ReforgedRemembrance',
  'ResolutionShinesAsPearlsOfSweat',
  'ReturnToDarkness',
  'RiverFlowsInSpring',
  'Sagacity',
  'SailingTowardsASecondLife',
  'SharedFeeling',
  'ShatteredHome',
  'SheAlreadyShutHerEyes',
  'SleepLikeTheDead',
  'SolitaryHealing',
  'SomethingIrreplaceable',
  'SubscribeForMore',
  'Swordplay',
  'TextureOfMemories',
  'TheBirthOfTheSelf',
  'TheDayTheCosmosFell',
  'TheMolesWelcomeYou',
  'TheSeriousnessOfBreakfast',
  'TheUnreachableSide',
  'ThisIsMe',
  'TimeWaitsForNoOne',
  'TodayIsAnotherPeacefulDay',
  'TrendOfTheUniversalMarket',
  'UnderTheBlueSky',
  'Void',
  'WarmthShortensColdNights',
  'WeAreWildfire',
  'WeWillMeetAgain',
  'WhatIsReal',
  'WhereaboutsShouldDreamsRest',
  'WoofWalkTime',
  'WorrisomeBlissful',
  'YetHopeIsPriceless',
] as const

export type LightConeKey = (typeof allLightConeKeys)[number]

export const allSuperimposeKeys = [1, 2, 3, 4, 5] as const
export type SuperimposeKey = (typeof allSuperimposeKeys)[number]

export const lightConeMaxLevel = 80

export function isLightConeKey(key: unknown): key is LightConeKey {
  return (
    typeof key === 'string' && allLightConeKeys.includes(key as LightConeKey)
  )
}
