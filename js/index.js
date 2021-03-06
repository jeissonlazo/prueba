let items = [
    {
        title: 'Capsule',
        text: 'It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.',
        imgUrl: 'imgs/hotels/hotel_1.png',
        id: 1
    },
    {
        title: 'Boutique Hotel',
        text: 'It is a type of hotel developed in Japan, which features many small bed-sized rooms known as capsules. Capsule hotels provide cheap, basic overnight accommodation for guests who do not require or who cannot afford larger, more expensive rooms offered by more conventional hotels.',
        imgUrl: 'imgs/hotels/hotel_2.png',
        id: 2
    },
    {
        title: 'Resort',
        text:'A place to which people frequently or generally go for relaxation or pleasure, especially one providing rest and recreation facilities for vacationers.',
        imgUrl: 'imgs/hotels/hotel_3.png',
        id: 3
    },
    {
        title: 'B&B',
        text: 'A bed and breakfast (typically shortened to B&B or BnB) is a small lodging establishment that offers overnight accommodation and breakfast. Bed and breakfasts are often private family homes and typically have between four and eleven rooms, with six being the average. In addition, a B&B usually has the hosts living in the house.',
        imgUrl: 'imgs/hotels/hotel_4.png',
        id: 4
    },
    {
        title: 'Castle',
        text: 'A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. Scholars debate the scope of the word castle, but usually consider it to be the private fortified residence of a lord or noble.',
        imgUrl: 'imgs/hotels/hotel_5.png',
        id: 5
    },
    {
        title: 'Tree House',
        text: 'A tree house, tree fort or treeshed is a platform or building constructed around, next to or among the trunk or branches of one or more mature trees while above ground level. Tree houses can be used for recreation, workspace, habitation, a hangout space and observation.',
        imgUrl: 'imgs/hotels/hotel_6.png',
        id: 6
    },
    {
        title: 'Hostel',
        text:'A hostel is a form of low-cost, short-term shared sociable lodging where guests can rent a bed, usually a bunk bed in a dormitory, with shared use of a lounge and sometimes a kitchen. Rooms can be mixed or single-sex and have private or shared bathrooms. Private rooms may also be available, but the property must offer dormitories to be considered a hostel.',
        imgUrl: 'imgs/hotels/hotel_7.png',
        id: 7
    },
    {
        title: 'Motel',
        text: 'It is a hotel providing travelers with lodging and free parking facilities, typically a roadside hotel having rooms adjacent to an outside parking area or an urban hotel offering parking within the building.',
        imgUrl: 'imgs/hotels/hotel_8.png',
        id: 8
    },
    {
        title: 'Business Class Hotel',
        text: 'Business hotels are hotels located near the business district of the country/region they are in. They focus primarily on businesspersons, not providing too much family rooms. They are sure to provide you with fast internet and silent rooms, if they are good at least. Most of them also offer conference rooms, etc.',
        imgUrl: 'imgs/hotels/hotel_9.png',
        id: 9
    },
    {
        title: 'Time Share / Condo Hotel',
        text: 'A condo hotel, also known as a condotel, hotel condo or a contel, is a building which is legally a condominium but which is operated as a hotel, offering short term rentals, and which maintains a front desk. Condo hotels are typically high-rise buildings developed and operated as luxury hotels, usually in major cities and resorts.',
        imgUrl: 'imgs/hotels/hotel_10.png',
        id: 10
    },
    {
        title: 'Glamping',
        text: 'Is a portmanteau of “glamorous” and “camping”, and describes a style of camping with amenities and, in some cases, resort-style services not usually associated with “traditional” camping. Glamping has become particularly popular with 21st-century tourists seeking the luxuries of hotel accommodation alongside “the escapism and adventure recreation of camping',
        imgUrl: 'imgs/hotels/hotel_11.png',
        id: 11
    },
    {
        title: 'Cruise',
        text: 'Cruise ships are large passenger ships used mainly for vacationing. Unlike ocean liners, which are used for transport, they typically embark on round-trip voyages to various ports-of-call, where passengers may go on tours known as “shore excursions.”',
        imgUrl: 'imgs/hotels/hotel_12.png',
        id: 12
    },
    {
        title: 'Apartment Hotel',
        text: 'A hotel rents furnished apartments or suites suitable for housekeeping, on a weekly or more permanent basis, and usually supplies all hotel services.',
        imgUrl: 'imgs/hotels/hotel_13.png',
        id: 13
    },
    {
        title: 'Inn',
        text: 'Inns are generally establishments or buildings where travelers can seek lodging, and usually, food and drink. Inns are typically located in the country or along a highway; before the advent of motorized transportation they also provided accommodation for horses.',
        imgUrl: 'imgs/hotels/hotel_14.png',
        id: 14
    },
    {
        title: 'CouchSurfing',
        text: 'CouchSurfing is a service that connects members to a global community of travelers. Use CouchSurfing to find a place to stay or share your home and hometown with travelers. Couchsurfers organize regular events in 200,000 cities around the world. There is always something to do and new friends to meet. ',
        imgUrl: 'imgs/hotels/hotel_15.png',
        id: 15
    },
    {
        title: 'Lighthouse',
        text: 'A lighthouse is a tower, building, or another type of structure designed to emit light from a system of lamps and lenses and to serve as a navigational aid for maritime pilots at sea or on inland waterways.',
        imgUrl: 'imgs/hotels/hotel_16.png',
        id: 16
    }

    

]

$(document).ready(function(){

    // jQuery methods go here...

    $( "#target" ).click(function() {
        transitionOne();
    });

    $( "#botton_two" ).click(function() {
        transitionTwo();
    });

    $('#alertHide').click(function(){
        hideAlert();
    })

    $('.marker').click(function(event){
        showInfo(event)
    })

    $('#infoHide').click(function(){
        hideInfo();
    })
  
});


let transitionOne = function (){
    $( "#target" ).addClass( "animate__animated  animate__fadeOut" );
    $( "#banner_one" ).addClass( "animate__animated animate__slideOutRight animate__faster" );

    setTimeout(() => {
       // $("#two").fadeIn()
        $("#two").css("display", "grid");
        $('#botton_two').addClass("animate__animated animate__fadeIn")
        $('#banner_two').addClass("animate__animated animate__slideInUp animate__faster")
        $("#one").css("display", "none");
    }, 500);
}

let transitionTwo = function(){
    $('#botton_two').removeClass("animate__animated animate__fadeIn")
    $('#banner_two').removeClass("animate__animated animate__slideInUp animate__faster")
    $( "#botton_two" ).addClass( "animate__animated  animate__fadeOutDownBig" );
    $( "#banner_two" ).addClass( "animate__animated animate__fadeOut animate__faster" );

    setTimeout(() => {
        // $("#two").fadeIn()
         $("#three").css("display", "grid");
         $('#mapThree').addClass("animate__animated animate__fadeIn")
         $('#alertThree').addClass("animate__animated animate__fadeInRightBig animate__faster")
         $("#two").css("display", "none");
     }, 500);
}

let hideAlert = function(){
    $('#alertThree').removeClass('animate__animated animate__fadeInRightBig animate__faster');
    $('#alertThree').addClass('animate__animated animate__slideOutRight  animate__faster')
    open = false;
}

let open = true;
let showInfo = function(id){

    if(open){
        return
    }
    $('#infoThree').removeClass('animate__animated animate__fadeOutRightBig  animate__faster')
    let value = id.target.id;

    let fined = items.find(element => element.id == value);
    $("#infoThree").css("display", "block");
    $('#infoThree').addClass('animate__animated animate__fadeInRightBig animate__faster');


    $('#infoTitle').text(fined.title);
    $('#infoContent').text(fined.text);
    $('#infoImage').attr('src',fined.imgUrl);
}

let hideInfo = function(){
    $('#infoThree').removeClass('animate__animated animate__fadeInRightBig animate__faster');
    $('#infoThree').addClass('animate__animated animate__fadeOutRightBig  animate__faster')
}

  