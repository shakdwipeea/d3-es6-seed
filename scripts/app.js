function draw (data) {
	d3.select('#main')
	.append('circle')
	.attr("cx", 50)
	.attr('cy', 50)
	.attr('r', 50)

	d3.select('#main')
	.append('circle')
	.attr("cx", 150)
	.attr('cy', 50)
	.attr('r', 50)
}

draw();