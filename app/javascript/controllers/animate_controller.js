import { Controller } from "@hotwired/stimulus"
import { animate } from "animejs"

// Connects to data-controller="animate"
export default class extends Controller {
	static targets = ["element"]

  connect() {
  }

	pulse(event) {
	}

	unscale(event) {
		console.log("unscale")
		animate(event.target, {
			scale: [
				{ to: 1, ease: 'inOut(3)', duration: 200 },
			],
		});
	}

	scale(event) {
		console.log("scale")
		animate(event.target, {
			scale: [
				{ to: 1.2, ease: 'inOut(3)', duration: 200 },
			],
		});
	}
}
