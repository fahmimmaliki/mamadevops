import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Divider, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppLayout } from "@/components/desktop/apps/layout/AppLayout";
import type { App } from "@/lib/apps/apps";
import useDelayRenderOnTouchDevice from "@/lib/useDelayRenderOnTouchDevice";
import {
  setActiveDesktopApp as setActiveDesktopAppAction,
  SetActiveDesktopAppAction,
} from "@/store/desktop";

export function AppProjects() {
  const shouldRenderContent = useDelayRenderOnTouchDevice({ delayAmount: 150 });
  const dispatch = useDispatch();

  const setActiveDesktopApp = useCallback<
    (args: App) => SetActiveDesktopAppAction
  >((payload) => dispatch(setActiveDesktopAppAction(payload)), [dispatch]);

  const onClose = () => setActiveDesktopApp("DesktopMainView");

  return (
    <AppLayout title="Hobby Projects" onClose={onClose}>
      <Flex flexDir="column" alignItems="center">
        {shouldRenderContent && (
          <>
            <Text>My Hobby Projects</Text>
            <Divider mt={4} mb={4} />
            <Heading size="sm" as="h1">
              <Text mb={4}>Still Casting Spell</Text>
            </Heading>
            <Image
              src="/images/wip-wizard.png"
              maxW={{ base: "90%", md: "70%" }}
              h="auto"
              mb={3}
              alt="null"
            />
            <Link
              href="https://github.com/fahmimmaliki"
              textDecor="underline"
              mb={3}
              target="_blank"
            >
              GitHub <ExternalLinkIcon />
            </Link>
            <Link
              href="https://mamadevops.com/desktop"
              textDecor="underline"
              mb={3}
              target="_blank"
            >
              Demo <ExternalLinkIcon />
            </Link>
            <Flex maxW="700px" flexDir="column">
              <Text>
                This is a collection of projects that I have been working on.
              </Text>
              <Text>
                This is part of my ongoing project called Mamadevops, stay tune!
              </Text>
            </Flex>
          </>
        )}
      </Flex>
    </AppLayout>
  );
}
