/* Copyright 2023 Marimo. All rights reserved. */
import {
  AppWindowIcon,
  SaveIcon,
  EditIcon,
  PlayIcon,
  RotateCcwIcon,
  SquareIcon,
} from "lucide-react";

import { Button } from "@/editor/inputs/Inputs";
import { KeyboardShortcuts } from "editor/KeyboardShortcuts";
import { ShutdownButton } from "editor/ShutdownButton";
import { RecoveryButton } from "editor/RecoveryButton";

import * as styles from "./Controls.styles";
import { Tooltip } from "../components/ui/tooltip";
import { renderShortcut } from "../components/shortcuts/renderShortcut";
import { useCellActions } from "../core/state/cells";
import { AppConfigButton } from "../components/app-config/app-config-button";
import { useState, useEffect } from "react";

interface ControlsProps {
  filename: string | null;
  needsSave: boolean;
  onSaveNotebook: () => void;
  getCellsAsJSON: () => string;
  presenting: boolean;
  onTogglePresenting: () => void;
  onInterrupt: () => void;
  onRun: () => void;
  onShutdown: () => void;
  closed: boolean;
  running: boolean;
  needsRun: boolean;
  undoAvailable: boolean;
}

export const Controls = ({
  filename,
  needsSave,
  onSaveNotebook,
  getCellsAsJSON,
  presenting,
  onTogglePresenting,
  onInterrupt,
  onRun,
  onShutdown,
  closed,
  running,
  needsRun,
  undoAvailable,
}: ControlsProps): JSX.Element => {
  const { undoDeleteCell } = useCellActions();

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onSaveNotebook();
  };

  let undoControl: JSX.Element | null = null;
  if (!closed && undoAvailable) {
    undoControl = (
      <Tooltip content="Undo cell deletion">
        <Button
          size="medium"
          color="hint-green"
          shape="circle"
          onClick={undoDeleteCell}
        >
          <RotateCcwIcon size={16} strokeWidth={1.5} />
        </Button>
      </Tooltip>
    );
  }

  return (
    <>
      {closed ? null : (
        <div className={styles.topRightControls}>
          <AppConfigButton />
          <ShutdownButton onShutdown={onShutdown} />
        </div>
      )}

      <div className={styles.bottomLeftControls}>
        {closed ? (
          <RecoveryButton
            filename={filename}
            getCellsAsJSON={getCellsAsJSON}
            needsSave={needsSave}
          />
        ) : (
          <Tooltip content={renderShortcut("global.save")}>
            <Button
              id="save-button"
              shape="rectangle"
              color={needsSave ? "yellow" : "hint-green"}
              onClick={handleSaveClick}
            >
              <SaveIcon strokeWidth={1.5} />
            </Button>
          </Tooltip>
        )}

        <Tooltip content={renderShortcut("global.hideCode")}>
          <Button
            id="preview-button"
            shape="rectangle"
            color="white"
            onClick={onTogglePresenting}
          >
            {presenting ? (
              <EditIcon strokeWidth={1.5} />
            ) : (
              <AppWindowIcon strokeWidth={1.5} />
            )}
          </Button>
        </Tooltip>

        <KeyboardShortcuts />
      </div>

      <div className={styles.bottomRightControls}>
        {undoControl}
        {!closed && (
          <RunControlButton
            running={running}
            needsRun={needsRun}
            onRun={onRun}
            onInterrupt={onInterrupt}
          />
        )}
      </div>
    </>
  );
};

const RunControlButton = ({
  running,
  needsRun,
  onRun,
  onInterrupt,
}: {
  running: boolean;
  needsRun: boolean;
  onRun: () => void;
  onInterrupt: () => void;
}) => {
  // Start a timer when the run starts.
  // After 200ms, show the interrupt button to avoid flickering.
  const [hasRunLongEnough, setHasRunLongEnough] = useState(false);
  useEffect(() => {
    if (!running) {
      return;
    }
    setHasRunLongEnough(false);
    const timeout = setTimeout(() => {
      setHasRunLongEnough(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [running]);

  if (running && hasRunLongEnough) {
    return (
      <Tooltip content={renderShortcut("global.interrupt")}>
        <Button
          size="medium"
          color="yellow"
          shape="circle"
          onClick={onInterrupt}
        >
          <SquareIcon strokeWidth={1.5} size={16} />
        </Button>
      </Tooltip>
    );
  } else if (needsRun) {
    return (
      <Tooltip content={renderShortcut("global.runStale")}>
        <Button size="medium" color="yellow" shape="circle" onClick={onRun}>
          <PlayIcon strokeWidth={1.5} size={16} />
        </Button>
      </Tooltip>
    );
  }

  return (
    <Tooltip content="Nothing to run">
      <Button
        className={"inactive-button"}
        color="disabled"
        size="medium"
        shape="circle"
      >
        <PlayIcon strokeWidth={1.5} size={16} />
      </Button>
    </Tooltip>
  );
};