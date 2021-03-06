import { Fragment } from 'inferno';
import { useBackend } from '../backend';
import { Box, Button, Section } from '../components';

export const SpawnersMenu = props => {
  const { act, data } = useBackend(props);
  const spawners = data.spawners || [];
  return (
    <Section>
      {spawners.map(spawner => (
        <Section
          key={spawner.name}
          title={spawner.name + ' (' + spawner.amount_left + ' left)'}
          level={2}
          buttons={(
            <Fragment>
              <Button
                content="Jump"
                onClick={() => act('jump', {
                  name: spawner.name,
                })} />
              <Button
                content="Spawn"
                onClick={() => act('spawn', {
                  name: spawner.name,
                })} />
            </Fragment>
          )}>
          <Box
            bold
            mb={1}
            fontSize="20px">
            {spawner.short_desc}
          </Box>
          <Box>
            {spawner.flavor_text}
          </Box>
          {!!spawner.important_info && (
            <Box
              mt={1}
              bold
              color="bad"
              fontSize="26px">
              {spawner.important_info}
            </Box>
          )}
        </Section>
      ))}
    </Section>
  );
};
