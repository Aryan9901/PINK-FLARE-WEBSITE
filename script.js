/** @format */

function timeline1() {
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
				duration: 2,
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
				duration: 2,
				ease: Expo.power1,
			},
			"hello1"
		)
		.to(
			"#circle",
			{
				scale: 0,
				duration: 2,
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
}
function timeline2() {
	var tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: "#second",
			pin: true,
			scrub: 1,
			start: "top top",
			end: "bottom -100%",
		},
	});
	tl2.to(".circles", {
		top: "50%",
		stagger: 0.08,
		duration: 1,
		ease: Expo.power1,
	})
		.to(".circles", {
			left: "50%",
			duration: 1,
			ease: Expo.power1,
		})
		.to(".circles", {
			scale: 12,
			duration: 2,
			ease: Expo.power1,
		})
		.to(
			"#stop .pi",
			{
				background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
				duration: 6,
				ease: Expo.power1,
			},
			"hii"
		)
		.to(
			"#stop h1",
			{
				left: "-150%",
				duration: 6,
				ease: Expo.power1,
			},
			"hii"
		)
		.to(
			"#sbtm p:nth-child(1)",
			{
				opacity: 0,
				duration: 6,
				delay: -4,
				ease: Expo.power1,
			},
			"hii"
		)
		.to(
			"#sbtm p:nth-child(2)",
			{
				opacity: 1,
				duration: 6,
				delay: 0.6,
				ease: Expo.power1,
			},
			"hii"
		)
		.to("#vertical .pillers", {
			height: "100%",
			stagger: 0.25,
			duration: 3,
			ease: Expo.power1,
		})
		.to(".pillers .tr,.pillers .br", {
			width: "50%",
			duration: 2,
			ease: Expo.power1,
		})
		.to(".pillers .br", {
			width: "75%",
			duration: 2,
			ease: Expo.power1,
		});
}

timeline1();
timeline2();
