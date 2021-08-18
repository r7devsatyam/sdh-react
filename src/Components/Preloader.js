import React, { useState } from "react";
import { useRef } from "react";

export default React.forwardRef((props , ref) => {
	ref.current += 1;
	return (
		<div>
			<div className="onloadpage" id="page_loader" style={
				 (ref.current >= 1) ? ({display: "none"}) : ({display: "inherit"})
			}>
				<div className="pre-content">
					<div className="logo-pre">
						<img src="images/logo.png" alt="Logo" className="img-fluid" />
					</div>
					<div className="pre-text- text-radius text-light text-animation bg-b">Niwax - Creative Agency & Portfolio HTML Template Are 2 Seconds Away. Have Patience</div>
				</div>
			</div>
		</div>
	);
});
