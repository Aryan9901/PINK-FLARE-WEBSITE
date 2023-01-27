/** @format */

var tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#home",
		start: "top top",
		// markers: true,
		scrub: 1,
		pin: true,
		end: "bottom -150%",
	},
});

tl.to(
	"#circle #btm img",
	{
		scale: 1,
		rotate: -180,
		duaration: 1,
		stagger: 0.1,
		ease: Expo.power1,
	},
	"hello"
)
	.to(
		"#circle #top img",
		{
			scale: 1,
			duaration: 1,
			stagger: 0.1,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#cimage img",
		{
			scale: 0,
			duaration: 1,
			stagger: 0.1,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#centerimg h3",
		{
			opacity: 0,
			stagger: 0.1,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#centerimg h5",
		{
			opacity: 0,
			stagger: 0.1,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#circle",
		{
			scale: 0.6,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#overlay #gall",
		{
			bottom: "-150%",
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#gola",
		{
			top: "50%",
			scale: 2,
			ease: Expo.power1,
		},
		"hello"
	)
	.to(
		"#gola",
		{
			opacity: 0,
			ease: Expo.power1,
		},
		"hello1"
	)
	.to(
		"#overlay #pf",
		{
			rotate: 0,
			bottom: "8%",
			ease: Expo.power1,
		},
		"hello1"
	)
	.to(
		"#smcircle",
		{
			scale: 0,
			ease: Expo.power1,
		},
		"hello1"
	)
	.to(
		"#circle",
		{
			scale: 0,
			ease: Expo.power1,
		},
		"hello1"
	)
	.to(
		"#pinkpart",
		{
			top: "0%",
			ease: Expo.power1,
		},
		"hello1"
	)
	.to("#pinkpart", {
		top: "-70%",
		duaration: 5,
		ease: Expo.power1,
	});
