document.addEventListener("DOMContentLoaded", function () {
	removeLoad();
	populateBubbles();
	firstAnimation();
	buttonAnimation();
	gsap.to("#rainbow", { rotate: 5, repeat: -1, yoyo: true, duration: 5 });

	const scrambleButton = document.getElementById("scramble");
	const assembleButton = document.getElementById("assemble");

	const scramble = () => {
		gsap
			.timeline()
			.to("#mouth", { rotate: 180 })
			.to(".eye", { x: 10 })
			.to(".eye", { x: 0, y: 10 })
			.to("#torso", { width: 1000, duration: 0.2 })
			.to("#left-arm", { width: 800, height: 500, duration: 0.2 }, "-=.2")
			.to("#right-arm", { width: 800, height: 500, duration: 0.2 }, "-=.2")
			.to(".eye", { x: 0, y: 0 });
	};

	const assemble = () => {
		gsap
			.timeline()
			.to("#torso", { width: 220, duration: 0.4 })
			.to("#left-arm", { width: 40, height: 150, duration: 0.4 }, "-=.2")
			.to("#right-arm", { width: 40, height: 150, duration: 0.4 }, "-=.2")
			.to("#mouth", { rotate: 0 })
			.to(".eye", { x: 0, y: 0 })
			.to("#right-arm", { rotate: -90, duration: 0.4 })
			.to("#left-arm", { rotate: 90, duration: 0.4 }, "-=.4")
			.to("#right-arm", { rotate: -45, duration: 0.4 })
			.to("#left-arm", { rotate: 45, duration: 0.4 }, "-=.4")
			.to("#right-arm", { rotate: -90, duration: 0.4 })
			.to("#left-arm", { rotate: 90, duration: 0.4 }, "-=.4")
			.to("#right-arm", { rotate: -45, duration: 0.4 })
			.to("#left-arm", { rotate: 45, duration: 0.4 }, "-=.4");
	};

	scrambleButton.addEventListener(
		"click",
		() => {
			scrambleButton.disabled = true;
			scrambleButton.style.cursor = "wait";
			scramble();
			setTimeout(() => {
				scrambleButton.style.display = "none";
				assembleButton.style.display = "block";
				scrambleButton.disabled = false;
				scrambleButton.style.cursor = "pointer";
			}, 2000);
		},
		false
	);

	assembleButton.addEventListener(
		"click",
		() => {
			assembleButton.disabled = true;
			assembleButton.style.cursor = "wait";
			assemble();
			setTimeout(() => {
				assembleButton.style.display = "none";
				scrambleButton.style.display = "block";
				assembleButton.disabled = false;
				assembleButton.style.cursor = "pointer";
			}, 2000);
		},
		false
	);
});

// populate bubbles

const firstAnimation = () => {
	const tl = gsap
		.timeline({ defaults: { duration: 1 } })
		.from("#ones", { scale: 0, rotate: 20, ease: "elastic.out" })
		.from("#imaginary", { scale: 0, y: -20, ease: "elastic.out" }, "-=.4")
		.from("#left-shoe", { top: "-100vh", ease: "bounce" })
		.from("#right-shoe", { top: "-100vh", ease: "bounce" }, "-=.5")
		.from("#left-eye", { scale: 0, ease: "bounce" })
		.from("#right-eye", { scale: 0, ease: "bounce" }, "-=.5")
		.from("#mouth-visible", { scale: 0, duration: 0.5 }, "-=.5")
		.from(".torso-bubble", { scale: 0, duration: 0.8, ease: "easeIn" })
		.from(".limbs-bubble", { scale: 0, duration: 0.8, ease: "easeIn" }, "-=.4")
		.to("#left-shoe", { rotate: 5, repeat: -1, yoyo: true, duration: 1 })
		.to(
			"#right-shoe",
			{ rotate: 5, repeat: -1, yoyo: true, duration: 1 },
			"-=1"
		)
		.from("#rainbow", { scale: 0, x: 20, duration: 0.5 }, "-=.5")
		.from("#scramble", { opacity: 0, duration: 0.2 });
};

const buttonAnimation = () => {
	const tl = gsap
		.timeline({ defaults: { duration: 1 }, yoyo: true, repeat: -1 })
		.to("button", { scale: 1.2 });
};

const removeLoad = () => {
	document.querySelector("#load-screen").style.display = "none";
};
const populateBubbles = () => {
	const torsoNode = document.getElementById("torso");
	const rightArmNode = document.getElementById("right-arm");

	const leftArmNode = document.getElementById("left-arm");
	const rightLegNode = document.getElementById("right-leg");
	const leftLegNode = document.getElementById("left-leg");

	const sizes = [10, 30, 40, 50];
	const angles = [90, 180, 319, "circle"];

	const tosroBubbleCount = 400;
	for (i = 0; i < tosroBubbleCount; i++) {
		const e = document.createElement("div");
		e.classList.add("bubble");
		e.classList.add("torso-bubble");
		let sizeStyle = sizes[Math.floor(Math.random() * 3)];
		e.style.height = `${sizeStyle}px`;
		e.style.width = `${sizeStyle}px`;
		e.style.top = `${Math.floor(Math.random() * 100)}%`;
		e.style.left = `${Math.floor(Math.random() * 100)}%`;
		const angle = angles[Math.floor(Math.random() * 4)];
		e.style.background = `linear-gradient(${angle}deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)`;
		torsoNode.appendChild(e);
	}

	const rightArmBubbleCount = 200;
	for (i = 0; i < rightArmBubbleCount; i++) {
		const e = document.createElement("div");
		e.classList.add("bubble");
		e.classList.add("limbs-bubble");
		let sizeStyle = sizes[Math.floor(Math.random() * 3)];
		e.style.height = `${sizeStyle}px`;
		e.style.width = `${sizeStyle}px`;
		e.style.top = `${Math.floor(Math.random() * 100)}%`;
		e.style.left = `${Math.floor(Math.random() * 100)}%`;
		const angle = angles[Math.floor(Math.random() * 4)];
		e.style.background = `linear-gradient(${angle}deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)`;
		rightArmNode.appendChild(e);
	}

	const leftArmBubbleCount = 200;
	for (i = 0; i < leftArmBubbleCount; i++) {
		const e = document.createElement("div");
		e.classList.add("bubble");
		e.classList.add("limbs-bubble");
		let sizeStyle = sizes[Math.floor(Math.random() * 3)];
		e.style.height = `${sizeStyle}px`;
		e.style.width = `${sizeStyle}px`;
		e.style.top = `${Math.floor(Math.random() * 100)}%`;
		e.style.left = `${Math.floor(Math.random() * 100)}%`;
		const angle = angles[Math.floor(Math.random() * 4)];
		e.style.background = `linear-gradient(${angle}deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)`;
		leftArmNode.appendChild(e);
	}

	const rightLegBubbleCount = 50;
	for (i = 0; i < rightLegBubbleCount; i++) {
		const e = document.createElement("div");
		e.classList.add("bubble");
		e.classList.add("limbs-bubble");
		let sizeStyle = sizes[Math.floor(Math.random() * 3)];
		e.style.height = `${sizeStyle}px`;
		e.style.width = `${sizeStyle}px`;
		e.style.top = `${Math.floor(Math.random() * 100)}%`;
		e.style.left = `${Math.floor(Math.random() * 100)}%`;
		const angle = angles[Math.floor(Math.random() * 4)];
		e.style.background = `linear-gradient(${angle}deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)`;
		rightLegNode.appendChild(e);
	}

	const leftLegBubbleCount = 50;
	for (i = 0; i < leftLegBubbleCount; i++) {
		const e = document.createElement("div");
		e.classList.add("bubble");
		e.classList.add("limbs-bubble");
		let sizeStyle = sizes[Math.floor(Math.random() * 3)];
		e.style.height = `${sizeStyle}px`;
		e.style.width = `${sizeStyle}px`;
		e.style.top = `${Math.floor(Math.random() * 100)}%`;
		e.style.left = `${Math.floor(Math.random() * 100)}%`;
		const angle = angles[Math.floor(Math.random() * 4)];
		e.style.background = `linear-gradient(${angle}deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)`;
		leftLegNode.appendChild(e);
	}
};
