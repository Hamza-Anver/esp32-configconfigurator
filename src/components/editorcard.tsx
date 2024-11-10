import React, { useState } from "react";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import HTMLEditor from "./htmleditor";
import PageRenderer from "./pagerenderer";


export default function EditorCard() {
  const [htmlContent, setHtmlContent] = useState("");
  return (
    <Card>
      <CardBody>
        <Tabs aria-label="Options">
          <Tab key="photos" title="Preview">
            <Card>
              <CardBody>
                <PageRenderer htmlContent={htmlContent} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="HTML">
            <Card>
              <CardBody>
                <HTMLEditor onCodeChange={setHtmlContent}/>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="CSS">
            <Card>
              <CardBody>
                Not yet implemented
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
